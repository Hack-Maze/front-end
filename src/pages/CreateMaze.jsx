import React, { useEffect, useState } from "react";
import { FaPencilRuler } from "react-icons/fa";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { LiaShareAltSolid } from "react-icons/lia";
import customFetch from "../../utils/CustomFetsh";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SubmitBtn from "@/components/SubmitBtn";
import LoadingItem from "@/components/LoadingItem";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateMaze = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [check, setChecked] = useState(0);
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const [uploadFile, setUploadFile] = useState("");
  const [checkLevel, setCheckLevel] = useState(true);
  const [loading, setLoading] = useState(false);
  const [summaryError, setSummaryError] = useState(false);
  const [summary, setSummary] = useState("");

  // const handleCheck = (value) => {
  //   setChecked(value);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      if (fileType === "image") {
        setUploadImage(file);
      } else {
        setUploadFile(file);
      }
    }
  };

  const handleSelectedLevel = (level) => {
    setSelectedLevel(level);
    setCheckLevel(true);
  };

  const onSubmit = async (data) => {
    if (!selectedLevel) {
      setCheckLevel(false);
    } else {
      setCheckLevel(true);
    }

    if (summary.trim() === "") {
      setSummaryError(true);
    } else {
      setSummaryError(false);
    }

    if (!selectedLevel || summary.trim() === "") {
      return;
    }
    setLoading(true);
    const accessToken = localStorage.getItem("accessToken");
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("summary", summary);
    formData.append("difficulty", selectedLevel.toUpperCase());
    formData.append("image", uploadImage);
    // formData.append("file", uploadFile);
    try {
      const response = await customFetch.post("maze", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      localStorage.setItem("mazeId", response.data);
      toast.success("Maze preview created");
      navigate("/learn/createMaze/content");
    } catch (error) {
      toast.error(error.response.data.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[70%] m-auto my-10 min-h-[75vh] text-white relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoadingItem />
        </div>
      )}
      <div className="flex justify-evenly m-auto mb-10">
        <div className="flex flex-col gap-3 py-5 px-10 justify-center border border-[#5874593a] bg-[#0f20183f]  rounded-md items-center w-[30%] text-center">
          <div className="flex flex-col gap-5 items-center">
            <FaPencilRuler size={100} />
            <h2 className="text-xl">Craft Your Maze.</h2>
          </div>
          <p className="text-gray-400">Create and customize your maze.</p>
        </div>
        <div className="flex flex-col gap-3 py-5 px-10 justify-center border border-[#5874593a] bg-[#0f20183f]  rounded-md items-center w-[30%] text-center">
          <div className="flex flex-col gap-5 items-center">
            <HiOutlineDocumentPlus size={100} />
            <h2 className="text-xl">Add tasks and resources.</h2>
          </div>
          <p className="text-gray-400">
            Upload resources (such as virtual machines or files) and create
            tasks with questions.
          </p>
        </div>
        <div className="flex flex-col gap-3 py-5 px-10 justify-center border border-[#5874593a] bg-[#0f20183f]  rounded-md items-center w-[30%] text-center">
          <div className="flex flex-col gap-5 items-center">
            <LiaShareAltSolid size={100} />
            <h2 className="text-xl">Share.</h2>
          </div>
          <p className="text-gray-400">
            Privately (or publicly) distribute your maze.
          </p>
        </div>
      </div>
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border border-[#5874593a] bg-[#0f20183f] rounded-md p-5 mb-10">
          <div className="mt-4 mb-2">
            <label className="md:text-lg text-base">Title</label>
            <input
              {...register("title", {
                required: "Please enter a title for the maze.",
              })}
              type="text"
              placeholder="#CrowCTF23"
              className="border border-[#58745975] bg-[#081b1b] w-full rounded-md h-10 p-4 placeholder:text-gray-600 outline-none mt-3"
            />
            {errors.title && (
              <p className="text-red-500 mt-2">{errors.title.message}</p>
            )}
          </div>
          <div className="mt-4 mb-2">
            <label className="md:text-lg text-base">Subtitle</label>
            <input
              {...register("description", {
                required: "Please enter a subtitle for the maze.",
              })}
              type="text"
              placeholder="#Short description"
              className="border border-[#58745975] bg-[#081b1b] w-full rounded-md h-10 p-4 placeholder:text-gray-600 outline-none mt-3"
            />
            {errors.description && (
              <p className="text-red-500 mt-2">{errors.description.message}</p>
            )}
          </div>
          <div className="mt-4 mb-2">
            <label className="md:text-lg text-base">Summary</label>
            <div className="my-4">
              <ReactQuill
                theme="snow"
                value={summary}
                onChange={setSummary}
                modules={modules}
                formats={formats}
                placeholder="Summary description of the maze"
                style={{
                  height: "fit-content",
                  marginBottom: "10px",
                  backgroundColor: "#081b1b",
                  color: "white",
                }}
                className="quill-editor border-[#58745975]"
              />
            </div>
            {summaryError && (
              <p className="text-red-500 mt-2">Please enter summary for maze</p>
            )}
          </div>
          <div className="mt-4 mb-2">
            <label htmlFor="upload" className="text-lg">
              Maze Logo{" "}
              <span className="text-gray-400 text-sm">
                (Accepted file types: .svg, .png, .jpg)
              </span>
            </label>
            <div className="w-full mt-3">
              <span
                className="border border-[#58745975] bg-[#081b1b] w-full rounded-md pl-2 flex justify-between items-center text-gray-500"
                style={{ overflow: "hidden" }}
              >
                {uploadImage.name || "Choose image"}
                <label
                  htmlFor="image"
                  className="cursor-pointer border-l border-[#58745975] bg-[#13321b] p-2 text-gray-400 hover:bg-[#13321b7a] hover:text-gray-300"
                >
                  Browse
                  <input
                    {...register("image", {
                      required: "Please select an image file.",
                    })}
                    type="file"
                    id="image"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, "image")}
                    accept=".svg,.png,.jpg"
                  />
                </label>
              </span>
              {errors.image && !uploadImage && (
                <p className="text-red-500 mt-2">{errors.image.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start">
            {/* <label className="text-lg mb-2 mt-2">Type</label>
            <div className="flex">
              <input
                type="radio"
                name="type"
                id="vm"
                className="mr-1"
                onClick={() => handleCheck(0)}
                checked={check === 0}
              />
              <label
                htmlFor="vm"
                className={`text-lg mr-5 ${
                  check === 0 ? "text-white" : "text-gray-400"
                }`}
              >
                VM.
              </label>
              <input
                type="radio"
                name="type"
                id="file"
                className="mr-1"
                onClick={() => handleCheck(1)}
                checked={check === 1}
              />
              <label
                htmlFor="file"
                className={`text-lg ${
                  check === 1 ? "text-white" : "text-gray-400"
                }`}
              >
                Downloadable File.
              </label>
            </div> */}
            <div className="flex flex-col w-full">
              {/* <label htmlFor="upload" className="text-lg mt-4 mb-2">
                Uplaod{" "}
                <span className="text-gray-400 text-sm">
                  (Accepted file types: .ova)
                </span>
              </label>
              <div className="w-full">
                <span
                  className="border border-[#58745975] bg-[#081b1b] w-full rounded-md pl-2 flex justify-between items-center text-gray-500"
                  style={{ overflow: "hidden" }}
                >
                  {uploadFile.name || "Choose file"}
                  <label
                    htmlFor="file"
                    className="cursor-pointer border-l border-[#58745975] bg-[#13321b] p-2 text-gray-400 hover:bg-[#13321b7a] hover:text-gray-300"
                  >
                    Browse
                    <input
                      {...register("file")}
                      type="file"
                      id="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, "file")}
                      accept=".ova"
                    />
                  </label>
                </span>
              </div> */}
              <div className="flex flex-col w-full">
                <div className="flex flex-col">
                  <h2 className="text-lg my-4">Maze Level</h2>
                  <div className="flex gap-4">
                    <span
                      className={`capitalize p-2 border rounded-md  cursor-pointer hover:bg-gray-800 ${
                        selectedLevel === "fundamental"
                          ? "border-[#5EE848] border-2"
                          : "border-gray-400"
                      }`}
                      onClick={() => handleSelectedLevel("fundamental")}
                    >
                      fundamental
                    </span>
                    <span
                      className={`capitalize p-2 border rounded-md  cursor-pointer hover:bg-gray-800 ${
                        selectedLevel === "easy"
                          ? "border-[#5EE848] border-2"
                          : "border-gray-400"
                      }`}
                      onClick={() => handleSelectedLevel("easy")}
                    >
                      easy
                    </span>
                    <span
                      className={`capitalize p-2 border rounded-md  cursor-pointer hover:bg-gray-800 ${
                        selectedLevel === "medium"
                          ? "border-[#5EE848] border-2"
                          : "border-gray-400"
                      }`}
                      onClick={() => handleSelectedLevel("medium")}
                    >
                      medium
                    </span>
                    <span
                      className={`capitalize p-2 border rounded-md  cursor-pointer hover:bg-gray-800 ${
                        selectedLevel === "hard"
                          ? "border-[#5EE848] border-2"
                          : "border-gray-400"
                      }`}
                      onClick={() => handleSelectedLevel("hard")}
                    >
                      hard
                    </span>
                  </div>
                  {!checkLevel && (
                    <p className="text-red-500 mt-2">
                      Please select maze level
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] mx-auto">
          <SubmitBtn text={"Add maze content"} />
        </div>
      </form>
      <div className="border border-[#5874593a] bg-[#0f20183f] rounded-md p-5 flex flex-col mt-8">
        <div>
          <h3 className="text-xl font-bold mb-1">Upload Instructions</h3>
          <p className="text-gray-400 mb-2">
            Please note that you can only upload one object at a time.
            <br /> To ensure that your upload succeeds, do not refresh the page
            while your item is uploading and do not open another instance of the
            upload page.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Virtual Machine Resources</h3>
          <p className="text-gray-400 mb-2">
            Machines you upload are deployed with low-resources.
            <br />
            If your machine is running slow and needs more RAM/vCPUs email us to
            increase it: urfav@me.com
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">
            Control your Machine In-browser
          </h3>
          <p className="text-gray-400 mb-2">
            Let your users control your machine directly in their browser (this
            also removes any OpenVPN requirement). Email us the credentials
            (whether this be for SSH/RDP/VNC) and we will add this functionality
            for you.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Costs</h3>
          <p className="text-gray-400 mb-2">
            Currently, we cover the costs for your uploaded files.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">
            Uploading Virtual Machine Images
          </h3>
          <p className="text-gray-400 mb-2">
            Any VM images will be automatically converted. This process can take
            up to 30 minutes depending on the size of the VM. We do this to make
            it easier to deploy infastructure in the cloud. Maximum file upload
            size is 20Gb. <br /> We support the following operating systems (and
            their corresponding kernel versions).
          </p>
          <span className="text-lg text-gray-400">
            (Windows, Ubuntu, RedHat, SUSE, CentOS, Debian, Oracle, Fedora)
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateMaze;
