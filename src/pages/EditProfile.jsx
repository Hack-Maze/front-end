import React, { useEffect, useState } from "react";
import { GrContactInfo, GrUploadOption } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import customFetch from "../../utils/CustomFetsh";
import FormRow from "@/components/FormRow";
import SubmitBtn from "@/components/SubmitBtn";
import { useHomeContext } from "@/pages/Home";
import { Form, redirect } from "react-router-dom";
import { toast } from "sonner";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");

  if (!username.trim() && !email.trim()) {
    toast.error("Email and username are required.");
    return null;
  } else if (!username.trim()) {
    toast.error("Username is required.");
    return null;
  } else if (!email.trim()) {
    toast.error("Email is required.");
    return null;
  }

  const accessToken = localStorage.getItem("accessToken");
  try {
    const image = formData.get("image");
    if (!image || image.size === 0) {
      formData.delete("image");
    }

    await customFetch.put("profile/update", formData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    toast.success("Profile updated.");
  } catch (error) {
    toast.error(error.response.data.toString());
    console.log(error);
  }
  return null;
};

const EditProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useHomeContext();

  const {
    username,
    email,
    bio,
    linkedinLink,
    githubLink,
    personalWebsite,
    image,
  } = data;

  console.log(data);

  const [imagePreview, setImagePreview] = useState(
    image === "image" ? "" : image
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-white w-[75%] m-auto my-10 min-h-[75vh]">
      <Form method="post" encType="multipart/form-data">
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
                  defaultValue={username}
                />
                <FormRow
                  text="Email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  defaultValue={email}
                />
                <FormRow
                  text="About"
                  name="bio"
                  type="text"
                  placeholder="Tell us more about you"
                  defaultValue={bio}
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
                  defaultValue={linkedinLink}
                />
                <FormRow
                  text="Github"
                  name="githubLink"
                  type="url"
                  placeholder="Add your github profile link"
                  defaultValue={githubLink}
                />
                <FormRow
                  text="Personal Website"
                  name="personalWebsite"
                  type="url"
                  placeholder="Add your website link"
                  defaultValue={personalWebsite}
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] mx-auto">
            <SubmitBtn text={"Save Changes"} />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditProfile;
