import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import RadarChart from "../Charts/RadarChart";
import LinearChart from "../Charts/LineChart";

const Layout_1 = ({ freinds = true, box_1_title, box_2_title, button }) => {
  const [isCard1Open, setIsCard1Open] = useState(true);
  const [isCard2Open, setIsCard2Open] = useState(true);

  const [shouldRenderCards, setShouldRenderCards] = useState({
    card1: false,
    card2: false,
  });

  useEffect(() => {
    let timer1, timer2;

    if (isCard1Open) {
      timer1 = setTimeout(() => {
        setShouldRenderCards((prevState) => ({ ...prevState, card1: true }));
      }, 200);
    } else {
      setShouldRenderCards((prevState) => ({ ...prevState, card1: false }));
    }

    if (isCard2Open) {
      timer2 = setTimeout(() => {
        setShouldRenderCards((prevState) => ({ ...prevState, card2: true }));
      }, 200);
    } else {
      setShouldRenderCards((prevState) => ({ ...prevState, card2: false }));
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isCard1Open, isCard2Open]);

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
            className={`border bg-[#f8eded29] px-5 py-4 pb-10 my-6 flex flex-col justify-between shadow-md shadow-[#fff3] w-[280px] border-red-500 rounded-md transition-height duration-300 ${
              isCard1Open ? "h-[250px]" : "overflow-hidden h-0"
            }`}
          >
            <div onClick={handleFriendsToggle} className="cursor-pointer">
              <h2 className="flex justify-between items-center font-bold text-xl capitalize">
                {box_1_title}
                {isCard1Open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </h2>
            </div>
            {isCard1Open && shouldRenderCards.card1 && (
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
                          <button className="text-red-500 hover:text-red-300 mr-3">
                            Remove
                          </button>
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
                          <button className="text-red-500 hover:text-red-300 mr-3">
                            Remove
                          </button>
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
          className={`border bg-[#f8eded29] px-5 py-4 pb-10 my-6 shadow-md shadow-[#fff3] w-[280px] border-red-500 rounded-md transition-height duration-300 ${
            isCard2Open ? "h-[300px]" : "overflow-hidden h-0"
          }`}
        >
          <div onClick={handleSkillsToggle} className="cursor-pointer pb-2">
            <h2 className="flex justify-between items-center font-bold text-xl capitalize">
              {box_2_title}
              {isCard2Open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </h2>
          </div>
          {isCard2Open && shouldRenderCards.card2 && (
            <>
              <div>
                {box_2_title === "skills matrix" ? (
                  <RadarChart />
                ) : (
                  <LinearChart />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout_1;
