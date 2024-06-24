import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import LinearChart from "../Charts/LineChart";
import ProgressChart from "../Charts/ProgressChart";
import customFetch from "../../../utils/CustomFetsh";

const Layout_1 = ({ box_1_title, box_2_title }) => {
  const [isCard1Open, setIsCard1Open] = useState(true);
  const [isCard2Open, setIsCard2Open] = useState(true);
  const [shouldRenderCards, setShouldRenderCards] = useState({
    card1: false,
    card2: false,
  });

  const [chartData, setChartData] = useState([]);
  const [circcleProgress, setCirccleProgress] = useState();
  const [days, setDays] = useState([]);

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

  useEffect(() => {
    const fetchLineChartData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await customFetch.get(`progress/week-progress`, {
          headers: { Authorization: "Bearer " + accessToken },
        });

        const data = response?.data;
        const days = Object.keys(data);
        const values = Object.values(data);

        setDays(days);
        setChartData(values.map((value) => ({ data: value })));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    const fetchCircleChartData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await customFetch.get(
          `progress/current-level-progress`,
          {
            headers: { Authorization: "Bearer " + accessToken },
          }
        );
        setCirccleProgress(response?.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchCircleChartData();
    fetchLineChartData();
  }, []);

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

          {isCard2Open && shouldRenderCards.card2 && (
            <ProgressChart data={circcleProgress} />
          )}
        </div>
        <div
          className={`border bg-[#0f20183f] px-5 pt-4 pb-12 my-6 shadow-box w-[350px] border-[#5874593a] rounded-md transition-height duration-300 ${
            isCard1Open ? "h-[400px]" : "overflow-hidden h-0 pb-10"
          }`}
        >
          <div onClick={handleChallengesToggle} className="cursor-pointer pb-2">
            <h2 className="flex justify-between items-center font-bold text-xl capitalize">
              {box_2_title}
              {isCard1Open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </h2>
          </div>
          {isCard1Open && shouldRenderCards.card1 && (
            <LinearChart data={chartData} days={days} />
          )}
        </div>
      </div>
    </>
  );
};

export default Layout_1;
