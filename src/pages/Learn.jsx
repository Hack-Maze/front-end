import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import learnImg from "/Learn.png";
import { FaPlus, FaTrash } from "react-icons/fa6";
import customFetch from "../../utils/CustomFetsh";
import LoadingItem from "@/components/LoadingItem";

const Learn = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedRooms, setDisplayedRooms] = useState(6);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchRooms = async () => {
      try {
        const response = await customFetch.get(`maze`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const difficultyColors = {
    fundamental: { color: "text-green-600", bgColor: "bg-[#336c4794]" },
    easy: { color: "text-blue-600", bgColor: "bg-[#2e4868a1]" },
    medium: { color: "text-yellow-600", bgColor: "bg-[#6c652c8c]" },
    hard: { color: "text-red-700", bgColor: "bg-[#62282875]" },
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRooms = rooms.filter((room) => {
    return (
      (filter === "All" || room.difficulty === filter.toUpperCase()) &&
      room.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const loadMoreItems = () => {
    setDisplayedRooms((prev) => prev + 6);
  };

  if (loading) {
    return <LoadingItem />;
  }

  return (
    <div className="w-[80%] m-auto my-10 min-h-[75vh]">
      <div className="flex justify-between items-center my-5">
        <p className="text-xl text-gray-400 w-[50%] leading-9">
          Explore our engaging content featuring interactive exercises inspired
          by real-world scenarios. From hacking machines to investigating
          attacks, we provide comprehensive coverage to sharpen your skills.
        </p>
        <img src={learnImg} alt="learn" className="h-[20vh]" />
      </div>
      <div className="flex justify-between my-10">
        <div className="flex flex-col">
          <h2 className="capitalize text-xl mb-2 text-white">learning mazes</h2>
          <p className="text-gray-400">
            Work your way through a structured learning maze.
          </p>
        </div>
        <Link
          to={"/learn/createMaze"}
          className="h-fit flex gap-4 p-3 text-[#5EE848] border border-[#5EE848] rounded-md items-center font-medium hover:bg-[#5de84817]"
        >
          <FaPlus />
          Create your maze
        </Link>
      </div>
      <div className="flex justify-between">
        <input
          type="text"
          className="text-white bg-[#2E3251] border border-[#585B74] rounded-md h-10 p-4 placeholder:text-gray-300 outline-none"
          placeholder="Search for Mazes"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="text-white">
          <ul className="flex border border-[#5de8482e] rounded-md">
            {["All", "Fundamental", "Easy", "Medium", "Hard"].map((item) => (
              <li
                key={item}
                className={`border-[#5de8482e] border-r p-3 cursor-pointer ${
                  filter === item ? "bg-[#5de8482e]" : ""
                }`}
                onClick={() => handleFilterChange(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 w-[70%] m-auto">
        {filteredRooms.length === 0 ? (
          <div className="text-white text-center">No results found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredRooms.slice(0, displayedRooms).map((room) => (
              <div className="relative" key={room.id}>
                <Link
                  to={`/learn/${room.id}/${room.title
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  className="flex flex-col text-center justify-evenly border border-[#5874593a] bg-[#0f20183f] p-4 items-center rounded-md max-w-md shadow-box hover:border-[#5de84844] transition duration-300 ease-in-out"
                >
                  <img
                    src={room.image}
                    alt="image"
                    className="h-40 w-72"
                    loading="lazy"
                  />

                  <h2
                    className="text-xl my-5 w-52 h-16 text-white font-semibold"
                    title={room.title}
                    style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
                  >
                    {room.title.length > 30
                      ? room.title.slice(0, 25).concat("...")
                      : room.title}
                  </h2>

                  <p
                    className="text-gray-400 px-3 w-72 h-16 text-sm"
                    style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
                  >
                    {room.description.length > 70
                      ? `${room.description.substring(0, 68)}...`
                      : room.description}
                  </p>
                  <p
                    className={`p-2 font-bold capitalize my-4 rounded-md tracking-wider ${
                      room.difficulty &&
                      difficultyColors[room.difficulty.toLowerCase()]
                        ? `${
                            difficultyColors[room.difficulty.toLowerCase()]
                              .color
                          } ${
                            difficultyColors[room.difficulty.toLowerCase()]
                              .bgColor
                          }`
                        : ""
                    }`}
                  >
                    {room.difficulty}
                  </p>
                  <p className="text-white">
                    By:{" "}
                    <Link
                      to={`/profile/${room.author.username}`}
                      className="text-green-600 hover:underline"
                    >
                      {room.author.username}
                    </Link>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
        {filteredRooms.length > displayedRooms && (
          <div className="flex justify-center mt-4">
            <button
              className="text-white font-bold py-2 px-4 rounded mt-3 underline"
              onClick={loadMoreItems}
            >
              See More &darr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
