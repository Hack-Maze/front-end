import React, { useState } from "react";
import { learns } from "@/static/data";
import { Link } from "react-router-dom";

const Learn = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedLearns, setDisplayedLearns] = useState(6);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const levelColors = {
    fundamental: { color: "text-green-600", bgColor: "bg-[#336c4794]" },
    easy: { color: "text-blue-600", bgColor: "bg-[#2e4868a1]" },
    medium: { color: "text-yellow-600", bgColor: "bg-[#6c652c8c]" },
    hard: { color: "text-red-700", bgColor: "bg-[#62282875]" },
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLearns = learns.filter((learn) => {
    return (
      (filter === "All" ||
        learn.level.toLowerCase() === filter.toLowerCase()) &&
      learn.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const loadMoreItems = () => {
    setDisplayedLearns((prev) => prev + 6);
  };

  return (
    <div className="w-[80%] m-auto my-10 min-h-[75vh]">
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
        {filteredLearns.length === 0 ? (
          <div className="text-white text-center">No results found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredLearns.slice(0, displayedLearns).map((learn, index) => (
              <div
                key={index}
                className="flex flex-col text-center justify-evenly border border-[#5874593a] bg-[#0f20183f] p-8 items-center rounded-md max-w-md shadow-box"
              >
                <img src={learn.img} alt="image" className="w-30" />
                <h2 className="text-xl my-3 text-white font-semibold">
                  {learn.title}
                </h2>
                <p className="text-gray-400 px-3 text-sm leading-7">
                  {learn.desc.length > 130
                    ? `${learn.desc.substring(0, 130)}...`
                    : learn.desc}
                </p>
                <p
                  className={`p-2 font-bold capitalize my-4 rounded-md tracking-wider ${
                    levelColors[learn.level.toLowerCase()].color
                  } ${levelColors[learn.level.toLowerCase()].bgColor}`}
                >
                  {learn.level}
                </p>
                <Link
                  to={`/learn/${learn.title.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-white py-2 px-4 border rounded-md mt-4 hover:bg-slate-800"
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        )}
        {filteredLearns.length > displayedLearns && (
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
