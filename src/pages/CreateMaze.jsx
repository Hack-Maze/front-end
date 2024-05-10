import React, { useState } from "react";
import { FaPencilRuler } from "react-icons/fa";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { LiaShareAltSolid } from "react-icons/lia";
import FormRow from "@/components/FormRow";
import { Link } from "react-router-dom";
const CreateMaze = () => {
  const [check, setChecked] = useState(0);
  const handleCheck = (value) => {
    setChecked(value);
  };

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };
  return (
    <div className="w-[70%] m-auto my-10 min-h-[75vh] text-white">
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
      <div className="border border-[#5874593a] bg-[#0f20183f] rounded-md p-5 mb-10">
        <FormRow
          type="text"
          text="Title"
          name="title"
          placeholder="#CrowCTF23"
        />
        <FormRow
          type="text"
          text="Summary"
          name="title"
          placeholder="Summary description of the maze"
        />
        <div className="flex flex-col items-start">
          <label className="text-lg mb-2">Type</label>
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
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="upload" className="text-lg mt-4 mb-2">
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
                {fileName || "Choose file"}
                <label
                  htmlFor="upload"
                  className="cursor-pointer border-l border-[#58745975] bg-[#13321b] p-2 text-gray-400 hover:bg-[#13321b7a] hover:text-gray-300"
                >
                  Browse
                  <input
                    type="file"
                    name="upload"
                    id="upload"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".ova"
                  />
                </label>
              </span>
            </div>
          </div>
          <Link
            to="/learn/createMaze/content"
            className="py-2 px-5 border border-[#5EE848] rounded-md mt-10 text-lg text-[#5EE848] hover:bg-[#5de8481c]"
          >
            Next
          </Link>
        </div>
      </div>
      <div className="border border-[#5874593a] bg-[#0f20183f] rounded-md p-5 flex flex-col">
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
