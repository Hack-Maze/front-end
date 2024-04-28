import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiArrowSquareOut } from "react-icons/pi";

const ProfileComp = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-start w-[50%]">
        <h2 className="text-3xl font-semibold mb-5">About</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          nulla, veritatis inventore nobis praesentium accusamus consequuntur
          ipsum voluptatum ipsam nesciunt minus quaerat vel impedit provident
          itaque quisquam beatae repudiandae. Ad dolores, consequuntur
          temporibus sequi excepturi facilis numquam quaerat explicabo natus?
        </p>
      </div>
      <div className="flex flex-col gap-10 justify-between w-[25%]">
        <div className="border-2 border-[#81a77c94] rounded-md px-5 shadow-box bg-[#0f20183f]">
          <h3 className="my-4 text-2xl font-semibold">Social</h3>
          <div className="flex flex-col gap-5 text-xl my-5">
            <span className="flex gap-3 items-center">
              <FaLinkedin size={25} />
              <a
                href=""
                className="flex w-[15vw] items-center justify-between border border-[#5EE848] rounded-md p-2 bg-[#5de84821]"
              >
                <span className="w-[13vw] h-[2.5vh] overflow-hidden text-base">
                  https://linkedin.com/mahmoud-ali1234/
                </span>
                <PiArrowSquareOut />
              </a>
            </span>
            <span className="flex gap-3 items-center">
              <SiGmail size={25} />
              <a
                href=""
                className="flex w-[15vw] items-center justify-between border border-[#5EE848] rounded-md p-2 bg-[#5de84821]"
              >
                <span className="w-[13vw] h-[2.5vh] overflow-hidden text-base">
                  https://gmail.com/mahmoud-ali12/
                </span>
                <PiArrowSquareOut />
              </a>
            </span>
          </div>
        </div>
        <div className="border-2 border-[#81a77c94] rounded-md px-5 shadow-box bg-[#0f20183f]">
          <h3 className="my-4 text-2xl font-semibold">Badges</h3>
          <div className="flex flex-col gap-5 my-5">There is nothing.</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
