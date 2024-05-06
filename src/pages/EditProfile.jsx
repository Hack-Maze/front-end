import React from "react";
import { GrContactInfo } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";

import { GrUploadOption } from "react-icons/gr";
import FormRow from "@/components/FormRow";
import SubmitBtn from "@/components/SubmitBtn";

const EditProfile = () => {
  return (
    <div className="text-white w-[75%] m-auto my-10 min-h-[75vh]">
      <div className="flex flex-col gap-10">
        <div className="rounded-md border border-[#81a77c94] shadow-box bg-[#0f20183f] p-5">
          <div className="flex mb-6">
            <GrContactInfo size={30} />
            <span className="capitalize ml-3 text-xl font-semibold">
              general info
            </span>
          </div>
          <div className="w-[70%] m-auto">
            <div className="flex my-5 items-center">
              <CgProfile size={70} />
              <span className="flex flex-col ml-5">
                <button className=" text-xs capitalize border p-2 rounded-md flex items-center gap-2 hover:bg-slate-800">
                  <GrUploadOption />
                  uplaod image
                </button>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormRow
                text="Username"
                name="username"
                type="text"
                placeholder="Full Name"
              />
              <FormRow
                text="Email"
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <FormRow
                text="About"
                name="about"
                type="text"
                placeholder="Tell us more about you"
              />
              <FormRow
                text="Password"
                name="password"
                type="password"
                placeholder="Your Password"
              />
            </div>
            <div className="w-[50%] mx-auto">
              <SubmitBtn text={"Save Changes"} />
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
                name="linkedin"
                type="url"
                placeholder="Add your linkedin profile link"
              />
              <FormRow
                text="Gmail"
                name="gmail"
                type="url"
                placeholder="Add your gmail profile link"
              />
              <FormRow
                text="Github"
                name="github"
                type="url"
                placeholder="Add your github profile link"
              />
              <FormRow
                text="facebook"
                name="facebook"
                type="url"
                placeholder="Add your facebook profile link"
              />
            </div>
            <div className="w-[50%] mx-auto">
              <SubmitBtn text={"Save Changes"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
