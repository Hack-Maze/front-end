import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import RadarChart from "../Charts/RadarChart";
import LinearChart from "../Charts/LinearChart";

const Layout_1 = ({ freinds = true, box_1_title, box_2_title, button }) => {
  const [isFriendsOpen, setIsFriendsOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const handleFriendsToggle = () => {
    setIsFriendsOpen(!isFriendsOpen);
  };

  const handleSkillsToggle = () => {
    setIsSkillsOpen(!isSkillsOpen);
  };

  return (
    <>
      <div className="flex flex-col text-white">
        {freinds && (
          <div
            className={`border bg-[#ffffff0d] p-5 my-6 flex flex-col justify-between shadow-lg shadow-[#fff3] w-[280px] ${
              isFriendsOpen ? "h-[250px]" : ""
            }`}
            style={{
              borderImage:
                "linear-gradient(140.79deg, #F03D3E 30%, #FFFFFF 60%) 1",
            }}
          >
            <div onClick={handleFriendsToggle} className="cursor-pointer">
              <h2 className="flex justify-between items-center font-bold text-lg capitalize">
                {box_1_title}
                {isFriendsOpen ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </h2>
            </div>
            {isFriendsOpen && (
              <div className="mt-auto">
                <button className="flex items-center font-medium text-lg m-auto rounded-md bg-[#F03D3E] px-3 py-1.5 capitalize">
                  <IoMdAdd /> {button}
                </button>
              </div>
            )}
          </div>
        )}
        <div
          className={`border bg-[#ffffff0d] p-5 my-6 shadow-lg shadow-[#fff3] w-[280px] ${
            isSkillsOpen ? "h-[300px]" : ""
          }`}
          style={{
            borderImage:
              "linear-gradient(140.79deg, #F03D3E 30%, #FFFFFF 60%) 1",
          }}
        >
          <div onClick={handleSkillsToggle} className="cursor-pointer pb-2">
            <h2 className="flex justify-between items-center font-bold text-lg capitalize">
              {box_2_title}
              {isSkillsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </h2>
          </div>
          {isSkillsOpen && (
            <>
              {box_2_title === "skills matrix" ? (
                <RadarChart />
              ) : (
                <div className="h-[330px]">
                  <LinearChart />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout_1;
