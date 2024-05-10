import FormRow from "@/components/FormRow";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MazePreview = () => {
  const [fileName, setFileName] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleSelectedLevel = (level) => {
    setSelectedLevel(level);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };
  return (
    <div className="w-[70%] m-auto my-10 min-h-[75vh] text-white">
      <h1 className="text-3xl mb-5 font-semibold">Maze Preview</h1>
      <div className="border border-[#5874593a] bg-[#0f20183f] rounded-md p-5 mb-10">
        <FormRow
          type="text"
          text="Maze Subtitle"
          name="subtitle"
          placeholder="Short description"
        />
        <div className="flex flex-col w-full">
          <label htmlFor="upload" className="text-lg mt-4 mb-2">
            Maze Logo{" "}
            <span className="text-gray-400 text-sm">
              (Accepted file types: .svg, .png, .jpg)
            </span>
          </label>
          <div className="w-full">
            <span
              className="border border-[#58745975] bg-[#081b1b] w-full rounded-md pl-2 flex justify-between items-center text-gray-500"
              style={{ overflow: "hidden" }}
            >
              {fileName || "Choose image"}
              <label
                htmlFor="upload"
                className="cursor-pointer border-l border-[#58745975] bg-[#13321b] p-2 text-gray-400 hover:bg-[#13321b7a] hover:text-gray-300"
              >
                Browse
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".svg,.png,.jpg"
                />
              </label>
            </span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg my-4">Maze Level</h2>
            <div className="flex gap-4">
              <span
                className={`capitalize p-2 border rounded-md  cursor-pointer hover:bg-gray-800 ${
                  selectedLevel === "fundamental"
                    ? "border-gray-200 border-2"
                    : "border-gray-400"
                }`}
                onClick={() => handleSelectedLevel("fundamental")}
              >
                fundamental
              </span>
              <span
                className={`capitalize p-2 border rounded-md  cursor-pointer hover:bg-gray-800 ${
                  selectedLevel === "easy"
                    ? "border-gray-200 border-2"
                    : "border-gray-400"
                }`}
                onClick={() => handleSelectedLevel("fundamental")}
              >
                easy
              </span>
              <span
                className={`capitalize p-2 border rounded-md  cursor-pointer hover:bg-gray-800 ${
                  selectedLevel === "medium"
                    ? "border-gray-200 border-2"
                    : "border-gray-400"
                }`}
                onClick={() => handleSelectedLevel("fundamental")}
              >
                medium
              </span>
              <span
                className={`capitalize p-2 border rounded-md  cursor-pointer hover:bg-gray-800 ${
                  selectedLevel === "hard"
                    ? "border-gray-200 border-2"
                    : "border-gray-400"
                }`}
                onClick={() => handleSelectedLevel("fundamental")}
              >
                hard
              </span>
            </div>
          </div>
          <Link
            to="/learn/createMaze/success"
            className="py-2 px-5 border border-[#5EE848] rounded-md mt-10 text-lg text-[#5EE848] hover:bg-[#5de8481c] w-fit"
          >
            Save & Create
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MazePreview;
