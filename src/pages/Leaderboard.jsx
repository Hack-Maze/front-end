import React, { useEffect, useState } from "react";
import customFetch from "../../utils/CustomFetsh";
import rankImg from "/Travels.png";
import { Link } from "react-router-dom";
import LoadingItem from "@/components/LoadingItem";

const Leaderboard = () => {
  const [leadershipData, setLeadershipData] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken");

  const ranks = [
    { rank: "#1", color: "#FFD700" },
    { rank: "#2", color: "#C0C0C0" },
    { rank: "#3", color: "#CD7F32" },
  ];

  useEffect(() => {
    const fetchLeadershipData = async () => {
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

        if (response.status === 200) {
          setLeadershipData(response.data);
        } else {
          console.error(
            "Failed to fetch leadership data:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching leadership data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeadershipData();
  }, [accessToken]);

  const handleSearchChange = (event) => {
    setSearchUsers(event.target.value);
  };

  const filteredUsers = leadershipData.filter((user) =>
    user.username.toLowerCase().includes(searchUsers.toLowerCase())
  );

  if (loading) {
    return <LoadingItem />;
  }

  return (
    <div className="min-h-[83vh] w-[80%] flex flex-col px-8 py-7 mx-auto text-white">
      <div className="flex justify-between my-5">
        <div className="w-full">
          <h1 className="text-2xl mb-4">Leaderboard</h1>
          <p className="text-xl text-gray-400 w-[50%] leading-9">
            Find all the results and score of your friends and the whole
            community. Your turn! Become the first!
          </p>
          <input
            type="text"
            className="text-white bg-[#2E3251] border border-[#585B74] rounded-md h-10 p-4 mt-5 placeholder:text-gray-300 outline-none"
            placeholder="Search for Users..."
            value={searchUsers}
            onChange={handleSearchChange}
          />
        </div>
        <img src={rankImg} alt="Rank" className="h-[25vh]" />
      </div>

      {!searchUsers && (
        <div className="flex justify-around mb-10">
          {leadershipData.slice(0, 3).map((hacker, index) => (
            <Link
              to={`/profile/${hacker.username}`}
              key={index}
              className={`h-[30vh] bg-[#5de8480e] border border-[#5de84888] rounded-md shadow-md text-white flex flex-col w-[25%] mb-5
              `}
            >
              <span
                className="text-3xl font-bold ml-3 mt-3"
                style={{ color: ranks[index].color }}
              >
                {ranks[index].rank}
              </span>
              <div className="text-center pt-1 flex flex-col items-center gap-5">
                <img
                  src={
                    hacker.image
                      ? hacker.image
                      : `https://api.dicebear.com/7.x/initials/svg?size=25&seed=${hacker.username}&backgroundColor=11221a&textColor=ffffff&radius=50&fontSize=60&fontWeight=100`
                  }
                  alt={hacker.username}
                  className="w-20 h-20 rounded-full"
                />
                <h3 className="text-xl font-bold capitalize">
                  {hacker.username}
                </h3>
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
      )}

      <div>
        <div className="border-b border-[#5874593a] pb-2 mb-4 flex justify-between items-center pl-4">
          <div className="flex items-center gap-8">
            {!searchUsers && <span className="text-lg font-bold">Rank</span>}
            <span className="text-lg font-bold">Avatar</span>
            <span className="text-lg font-bold">Username</span>
          </div>
          <span className="text-lg font-bold">Total points</span>
        </div>
        {(searchUsers ? filteredUsers : leadershipData.slice(3)).map(
          (hacker, index) => (
            <Link
              to={`/profile/${hacker.username}`}
              key={index + 3}
              className="border border-[#5874593a] bg-[#0f20183f] rounded-md p-5 mb-6 flex justify-between items-center"
            >
              <div className="flex items-center gap-10">
                {!searchUsers && (
                  <span className="text-xl font-bold mr-3">#{index + 4}</span>
                )}
                <img
                  src={
                    hacker.image
                      ? hacker.image
                      : `https://api.dicebear.com/7.x/initials/svg?size=25&seed=${hacker.username}&backgroundColor=11221a&textColor=ffffff&radius=50&fontSize=60&fontWeight=100`
                  }
                  alt={hacker.username}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="text-lg font-bold capitalize">
                    {hacker.username}
                  </h3>
                  <p className="text-sm text-gray-400">[{hacker.level}]</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <span>{hacker.country}</span>
                <span>{hacker.score}</span>
                <span>{hacker.rank}</span>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
