import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import RadarChart from "../Charts/RadarChart";
import LinearChart from "../Charts/LineChart";

const Layout_1 = ({ freinds = true, box_1_title, box_2_title, button }) => {
  const [isCard1Open, setIsCard1Open] = useState(true);
  const [isCard2Open, setIsCard2Open] = useState(true);

  const handleFriendsToggle = () => {
    setIsCard1Open(!isCard1Open);
  };

  const handleSkillsToggle = () => {
    setIsCard2Open(!isCard2Open);
  };

  const data = {
    friends: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ],
    tasks: [
      { id: 1, name: "Task 1" },
      { id: 2, name: "Task 2" },
    ],
  };

  return (
    <>
      <div className="flex flex-col text-white">
        {freinds && (
          <div
            className={`border bg-[#be97970d] p-5 my-6 flex flex-col justify-between shadow-md shadow-[#fff3] w-[280px] border-gray-400 rounded-md ${
              isCard1Open ? "h-[250px]" : ""
            }`}
          >
            <div onClick={handleFriendsToggle} className="cursor-pointer">
              <h2 className="flex justify-between items-center font-bold text-xl capitalize ">
                {box_1_title}
                {isCard1Open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </h2>
            </div>
            {isCard1Open && (
              <>
                <div className="mb-4 mt-2 overflow-y-auto max-h-48">
                  {/* Conditionally render friends or tasks data */}
                  {box_1_title === "friends"
                    ? data.friends.map((friend, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between mb-2"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{friend.name}</span>
                          </div>
                          <button className="text-red-500">Remove</button>
                        </div>
                      ))
                    : data.tasks.map((task, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between mb-2"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{task.name}</span>
                          </div>
                          <button className="text-red-500">Remove</button>
                        </div>
                      ))}
                </div>
                <div className="mt-auto">
                  <button className="flex items-center font-medium text-lg m-auto rounded-md hover:bg-red-400 bg-red-500 px-3 py-1.5 capitalize">
                    <IoMdAdd /> {button}
                  </button>
                </div>
              </>
            )}
          </div>
        )}
        <div
          className={`border bg-[#be97970d] p-5 my-6 shadow-md shadow-[#fff3] w-[280px] border-gray-400 rounded-md ${
            isCard2Open ? "h-[300px]" : ""
          }`}
        >
          <div onClick={handleSkillsToggle} className="cursor-pointer pb-2">
            <h2 className="flex justify-between items-center font-bold text-xl capitalize">
              {box_2_title}
              {isCard2Open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </h2>
          </div>
          {isCard2Open && (
            <>
              {box_2_title === "skills matrix" ? (
                <RadarChart />
              ) : (
                <div>
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
