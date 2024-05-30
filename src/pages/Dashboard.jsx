import React from "react";
import { Paths, RecPaths } from "../static/data";
import { Link } from "react-router-dom";
import Layout_1 from "../components/Layout_1/Layout_1";
import { GiMaze } from "react-icons/gi";
import { PiCoffeeLight } from "react-icons/pi";
import { GiLaurelCrown } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const topThreeHackers = [
    {
      img: <CgProfile size={50} />,
      name: "Hacker 1",
      rank: "Rank 1",
      score: 100,
    },
    {
      img: <CgProfile size={50} />,
      name: "Hacker 2",
      rank: "Rank 2",
      score: 90,
    },
    {
      img: <CgProfile size={50} />,
      name: "Hacker 3",
      rank: "Rank 3",
      score: 80,
    },
  ];

  const ranks = [
    { rank: "#1", color: "#FFD700" },
    { rank: "#2", color: "#C0C0C0" },
    { rank: "#3", color: "#CD7F32" },
  ];

  return (
    <div className="w-[80%] flex flex-col px-8 py-7 mx-auto text-white">
      <div className="flex flex-row justify-between my-5">
        <div className="w-[65%] ">
          <div className="border border-[#5874593a] bg-[#0f20183f] rounded-md p-5 mb-10 h-[60vh]">
            <div>
              <h2 className="text-3xl flex gap-2 items-center font-semibold p-3">
                <GiMaze />
                Mazes List
              </h2>
            </div>
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
          </div>
        </div>
        <Layout_1 box_1_title={"level"} box_2_title={"challenges"} />
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
            <div
              key={index}
              className="h-[30vh] bg-[#5de8480e] border border-[#5de84888] rounded-md shadow-md text-white flex flex-col w-[25%] m-auto mb-5"
            >
              <span
                className="text-3xl font-bold ml-3 mt-3"
                style={{ color: ranks[index].color }}
              >
                {ranks[index].rank}
              </span>
              <div className="text-center pt-5 flex flex-col items-center gap-5">
                {hacker.img}

                <h3 className="text-xl font-bold">{hacker.name}</h3>
                <p className="flex flex-col gap-2">
                  Solved mazes:
                  <span className="font-semibold">{hacker.score}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
