import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout_1 from "../components/Layout_1/Layout_1";
import { GiMaze, GiLaurelCrown } from "react-icons/gi";
import { PiCoffeeLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import customFetch from "../../utils/CustomFetsh";
import LoadingItem from "@/components/LoadingItem";

const Dashboard = () => {
  const [topThreeHackers, setTopThreeHackers] = useState([]);
  const [notCompletedMazes, setNotCompletedMazes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchRanksData = async () => {
      try {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const formattedMonth =
          currentMonth < 10 ? `0${currentMonth}` : currentMonth;
        const startDate = `${currentYear}-${formattedMonth}-01`;
        const endDate = `${currentYear}-${formattedMonth}-29`;

        const response = await customFetch.get(
          `leadership?start=${startDate}&end=${endDate}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        let topThree = response.data;
        if (topThree.length >= 3) {
          [topThree[0], topThree[1]] = [topThree[1], topThree[0]];
        }
        const topThreeFormatted = response.data
          .slice(0, 3)
          .map((user, index) => ({
            img: user.image ? (
              <img
                src={user.image}
                alt={user.username}
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <CgProfile size={80} />
            ),
            name: user.username,
            rank: `Rank ${index + 1}`,
            score: user.score,
          }));
        setTopThreeHackers(topThreeFormatted);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchMazes = async () => {
      try {
        const response = await customFetch.get(`progress/not-completed-mazes`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setNotCompletedMazes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchRanksData(), fetchMazes()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const ranks = [
    { rank: "#2", color: "#C0C0C0" },
    { rank: "#1", color: "#FFD700" },
    { rank: "#3", color: "#CD7F32" },
  ];
  const difficultyColors = {
    fundamental: { color: "text-green-600", bgColor: "bg-[#336c4794]" },
    easy: { color: "text-blue-600", bgColor: "bg-[#2e4868a1]" },
    medium: { color: "text-yellow-600", bgColor: "bg-[#6c652c8c]" },
    hard: { color: "text-red-700", bgColor: "bg-[#62282875]" },
  };

  if (loading) {
    return <LoadingItem />;
  }

  return (
    <div className="w-[80%] flex flex-col px-8 py-7 mx-auto text-white">
      <div className="flex flex-row justify-between my-5">
        <div className="w-[65%]">
          <div className="border border-[#5874593a] bg-[#0f20183f] rounded-md p-5 mb-10 min-h-[60vh] max-h-[90vh] overflow-y-scroll">
            <div>
              <h2 className="text-3xl flex gap-2 items-center font-semibold p-3">
                <GiMaze />
                Mazes List
              </h2>
            </div>
            {notCompletedMazes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {notCompletedMazes.map((maze) => (
                  <Link
                    key={maze.mazeId}
                    to={`/learn/${maze.mazeId}/${maze.title
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                    className="flex flex-col text-center justify-evenly border border-[#5874593a] bg-[#0f20183f] p-4 items-center rounded-md max-w-md shadow-box hover:border-[#5de84844] transition duration-300 ease-in-out"
                  >
                    <img
                      src={maze.image}
                      alt="image"
                      className="h-40 w-72"
                      loading="lazy"
                    />

                    <h2
                      className="text-xl my-5 w-52 h-16 text-white font-semibold"
                      title={maze.title}
                      style={{
                        whiteSpace: "normal",
                        overflowWrap: "break-word",
                      }}
                    >
                      {maze.title.length > 30
                        ? maze.title.slice(0, 25).concat("...")
                        : maze.title}
                    </h2>
                    <p
                      className={`p-2 font-bold capitalize my-4 rounded-md tracking-wider ${
                        maze.difficulty &&
                        difficultyColors[maze.difficulty.toLowerCase()]
                          ? `${
                              difficultyColors[maze.difficulty.toLowerCase()]
                                .color
                            } ${
                              difficultyColors[maze.difficulty.toLowerCase()]
                                .bgColor
                            }`
                          : ""
                      }`}
                    >
                      {maze.difficulty}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-5 items-center justify-center h-[50vh]">
                <PiCoffeeLight size={120} color="#928e8eb2" />
                <h3 className="text-xl text-gray-200">
                  It's time to kickstart your journey.
                </h3>
                <Link
                  to="/learn"
                  className="py-2 px-5 border border-[#5EE848] rounded-md mt-5 text-lg text-[#5EE848] hover:bg-[#5de8481c]"
                >
                  Explore Mazes
                </Link>
              </div>
            )}
          </div>
        </div>
        <Layout_1 box_1_title={"level"} box_2_title={"week progress"} />
      </div>
      <div className="border border-[#5874593a] bg-[#0f20183f] rounded-md p-5 mb-10">
        <div className="mb-5 flex justify-between items-center">
          <h2 className="text-3xl flex gap-2 items-center font-semibold p-3">
            <GiLaurelCrown size={40} />
            Top Hackers
          </h2>
          <Link to="/leaderboard" className="underline">
            See all &rarr;
          </Link>
        </div>
        <div className="flex justify-between w-[80%] m-auto">
          {topThreeHackers.map((hacker, index) => (
            <Link
              to={`/profile/${hacker.username}`}
              key={index}
              className={`h-[30vh] bg-[#5de8480e] border border-[#5de84888] rounded-md shadow-md text-white flex flex-col w-[25%] mb-5
              ${index === 0 ? "mt-[10px]" : ""}
              ${index === 1 ? "mt-[-20px]" : ""}
              ${index === 2 ? "mt-[30px]" : ""}
                `}
            >
              <span
                className="text-3xl font-bold ml-3 mt-3"
                style={{ color: ranks[index].color }}
              >
                {ranks[index].rank}
              </span>
              <div className="text-center pt-1 flex flex-col items-center gap-5">
                {hacker.img}
                <h3 className="text-xl font-bold capitalize">{hacker.name}</h3>
                <p className="flex flex-col gap-2">
                  Total points:
                  <span className="font-bold text-[#5de848d3]">
                    {hacker.score}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
