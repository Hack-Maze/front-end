import React, { useEffect, useState } from "react";
import { GrContactInfo, GrUploadOption } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import customFetch from "../../utils/CustomFetsh";
import FormRow from "@/components/FormRow";
import SubmitBtn from "@/components/SubmitBtn";
import { useHomeContext } from "@/pages/Home";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [isDiabled, setIsDisabled] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useHomeContext();
  const navigate = useNavigate();

  const {
    username,
    email,
    bio,
    linkedinLink,
    githubLink,
    personalWebsite,
    image,
  } = data;

  const [formValues, setFormValues] = useState({
    username: username || "",
    email: email || "",
    bio: bio || "",
    linkedinLink: linkedinLink || "",
    githubLink: githubLink || "",
    personalWebsite: personalWebsite || "",
    image: "",
  });

  const [initialValues] = useState({ ...formValues });
  const [imagePreview, setImagePreview] = useState(image || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormValues((prevValues) => ({
          ...prevValues,
          image: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (JSON.stringify(formValues) === JSON.stringify(initialValues)) {
      toast.error("No changes detected.");
      return;
    }

    const formData = new FormData();
    for (const key in formValues) {
      if (key === "image" && !formValues[key]) {
        continue;
      }
      if (formValues[key] instanceof File) {
        const blob = new Blob([formValues[key]], { type: "image/jpeg" });
        formData.append(key, blob, "image.jpg");
      } else {
        formData.append(key, formValues[key]);
      }
    }

    const accessToken = localStorage.getItem("accessToken");
    try {
      setIsDisabled(true);
      await customFetch.put("profile/update", formData, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      toast.success("Profile updated.");
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response ? error.response.data.toString() : error.message
      );
      console.log(error);
    }
    setIsDisabled(flase);
  };

  return (
    <div className="text-white w-[75%] m-auto my-10 min-h-[75vh]">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col gap-10">
          <div className="rounded-md border border-[#81a77c94] shadow-box bg-[#0f20183f] p-5">
            <div className="flex mb-6">
              <GrContactInfo size={30} />
              <span className="capitalize ml-3 text-xl font-semibold">
                General Info
              </span>
            </div>
            <div className="w-[70%] m-auto">
              <div className="flex my-5 items-center">
                <img
                  className="p-2 h-32 w-32 rounded-full border-2 border-[#81a77c94] shadow-box bg-[#0f20183f]"
                  src={
                    imagePreview ||
                    `https://api.dicebear.com/7.x/initials/svg?size=25&seed=${username}&backgroundColor=11221a&textColor=ffffff&radius=50&fontSize=60&fontWeight=100`
                  }
                  alt="profile"
                  loading="lazy"
                />
                <span className="flex flex-col ml-5">
                  <label className="text-xs capitalize border p-2 rounded-md flex items-center gap-2 hover:bg-slate-800 cursor-pointer">
                    <GrUploadOption />
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      name="image"
                      onChange={handleImageChange}
                    />
                  </label>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormRow
                  text="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  defaultValue={formValues.username}
                  onChange={handleChange}
                />
                <FormRow
                  text="Email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  defaultValue={formValues.email}
                  onChange={handleChange}
                />
                <FormRow
                  text="About"
                  name="bio"
                  type="text"
                  placeholder="Tell us more about you"
                  defaultValue={formValues.bio}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="rounded-md border border-[#81a77c94] shadow-box bg-[#0f20183f] p-5">
            <div className="flex mb-6">
              <TbListDetails size={30} />
              <span className="capitalize ml-3 text-xl font-semibold">
                Social Links
              </span>
            </div>
            <div className="w-[70%] m-auto">
              <div className="grid grid-cols-2 gap-4 items-center">
                <FormRow
                  text="LinkedIn"
                  name="linkedinLink"
                  type="url"
                  placeholder="Add your linkedin profile link"
                  defaultValue={formValues.linkedinLink}
                  onChange={handleChange}
                />
                <FormRow
                  text="Github"
                  name="githubLink"
                  type="url"
                  placeholder="Add your github profile link"
                  defaultValue={formValues.githubLink}
                  onChange={handleChange}
                />
                <FormRow
                  text="Personal Website"
                  name="personalWebsite"
                  type="url"
                  placeholder="Add your website link"
                  defaultValue={formValues.personalWebsite}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] mx-auto">
            <SubmitBtn text={"Save Changes"} isDisabled={isDiabled} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
