import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import PieChart from "../Charts/PieChart";
import LinearChart from "../Charts/LineChart";
import ProgressChart from "../Charts/ProgressChart";

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

  const handleChallengesToggle = () => {
    setIsCard1Open(!isCard1Open);
  };

  const handleSkillsToggle = () => {
    setIsCard2Open(!isCard2Open);
  };

  return (
    <>
      <div className="flex flex-col text-white">
        <div
          className={`border bg-[#0f20183f] px-5 py-4 pb-10 mb-6 shadow-box w-[350px] border-[#5874593a] rounded-md transition-height duration-300 ${
            isCard2Open ? "h-[400px]" : "overflow-hidden h-0"
          }`}
        >
          <div onClick={handleSkillsToggle} className="cursor-pointer pb-2">
            <h2 className="flex justify-between items-center font-bold text-xl capitalize">
              {box_1_title}
              {isCard2Open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </h2>
          </div>

          {/* {isCard2Open && shouldRenderCards.card2 && <PieChart />} */}
          {isCard2Open && shouldRenderCards.card2 && <ProgressChart />}
        </div>
        <div
          className={`border bg-[#0f20183f] px-5 py-4 my-6 shadow-box w-[350px] border-[#5874593a] rounded-md transition-height duration-300 ${
            isCard1Open ? "h-[400px]" : "overflow-hidden h-0 pb-10"
          }`}
        >
          <div onClick={handleChallengesToggle} className="cursor-pointer pb-2">
            <h2 className="flex justify-between items-center font-bold text-xl capitalize">
              {box_2_title}
              {isCard1Open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </h2>
          </div>
          {isCard1Open && shouldRenderCards.card1 && <LinearChart />}
        </div>
      </div>
    </>
  );
};

export default Layout_1;
