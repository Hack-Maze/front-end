import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiArrowSquareOut } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";

const ProfileComp = ({ data }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex  flex-col items-start w-[50%]">
        <h2 className="text-3xl font-semibold mb-5">About</h2>
        {data.bio ? <p>{data.bio}</p> : <p>Nothing here...</p>}
      </div>
      <div className="flex flex-col gap-10 justify-between w-[25%]">
        <div className="border-2 border-[#81a77c94] rounded-md px-5 shadow-box bg-[#0f20183f]">
          <h3 className="my-4 text-2xl font-semibold">Social</h3>
          <div className="flex flex-col gap-5 text-xl my-5">
            {data.linkedinLink && (
              <span className="flex gap-3 items-center">
                <FaLinkedin size={25} />
                <a
                  href={data.linkedinLink}
                  className="flex w-[15vw] items-center justify-between border border-[#5EE848] rounded-md p-2 bg-[#5de84821]"
                  target="_blank"
                >
                  <span className="w-[13vw] h-[2.5vh] overflow-hidden text-base">
                    {data.linkedinLink}
                  </span>
                  <PiArrowSquareOut />
                </a>
              </span>
            )}
            {data.email && (
              <span className="flex gap-3 items-center">
                <SiGmail size={25} />
                <a
                  href={`mailto:${data.email}`}
                  className="flex w-[15vw] items-center justify-between border border-[#5EE848] rounded-md p-2 bg-[#5de84821]"
                >
                  <span className="w-[13vw] h-[2.5vh] overflow-hidden text-base">
                    {data.email}
                  </span>
                  <PiArrowSquareOut />
                </a>
              </span>
            )}
            {data.githubLink && (
              <span className="flex gap-3 items-center">
                <FaGithub size={25} />
                <a
                  href={data.githubLink}
                  className="flex w-[15vw] items-center justify-between border border-[#5EE848] rounded-md p-2 bg-[#5de84821]"
                  target="_blank"
                >
                  <span className="w-[13vw] h-[2.5vh] overflow-hidden text-base">
                    {data.githubLink}
                  </span>
                  <PiArrowSquareOut />
                </a>
              </span>
            )}
            {data.personalWebsite && (
              <span className="flex gap-3 items-center">
                <TbWorld size={25} />
                <a
                  href={data.personalWebsite}
                  className="flex w-[15vw] items-center justify-between border border-[#5EE848] rounded-md p-2 bg-[#5de84821]"
                  target="_blank"
                >
                  <span className="w-[13vw] h-[2.5vh] overflow-hidden text-base">
                    {data.personalWebsite}
                  </span>
                  <PiArrowSquareOut />
                </a>
              </span>
            )}
          </div>
        </div>
        <div className="border-2 border-[#81a77c94] rounded-md px-5 shadow-box bg-[#0f20183f]">
          <h3 className="my-4 text-2xl font-semibold">Badges</h3>
          {data.badge ? (
            <div>{data.badge}</div>
          ) : (
            <div className="flex flex-col gap-5 my-5">There is nothing.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
