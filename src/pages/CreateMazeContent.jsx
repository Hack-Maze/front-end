import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CreateMazeContent = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionDesc, setSectionDesc] = useState("");
  const [sections, setSections] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);

  const handleAddSection = () => {
    if (sectionTitle.trim() === "" || sectionDesc.trim() === "") {
      toast.error("Section title and content cannot be empty");
      return;
    }

    if (isEditing) {
      const updatedSections = [...sections];
      updatedSections[selectedSectionIndex] = {
        title: sectionTitle,
        desc: sectionDesc,
      };
      setSections(updatedSections);
      setIsEditing(false);
    } else {
      const newSection = { title: sectionTitle, desc: sectionDesc };
      setSections([...sections, newSection]);
    }
    setSectionTitle("");
    setSectionDesc("");
  };

  const handleSectionClick = (index) => {
    const selectedSection = sections[index];
    setSectionTitle(selectedSection.title);
    setSectionDesc(selectedSection.desc);
    setIsEditing(true);
    setSelectedSectionIndex(index);
  };

  const toggleTableOfContents = () => {
    setIsExpanded(!isExpanded);
  };

  const sectionsList = sections.map((section, index) => (
    <li
      key={index}
      className={`leading-7 p-2 bg-[#d9d9d917] mb-3 rounded-md cursor-pointer flex items-center justify-between
      `}
      onClick={() => handleSectionClick(index)}
    >
      {section.title}
    </li>
  ));
  return (
    <div className="w-[70%] m-auto my-10 text-white">
      <h1 className="text-3xl font-semibold">Create Maze</h1>
      <div className="flex justify-between my-10">
        <div className="w-full flex flex-col justify-between">
          <div className="w-[85%] flex flex-col">
            <input
              type="text"
              value={sectionTitle}
              onChange={(e) => {
                setSectionTitle(e.target.value);
              }}
              className="text-2xl font-semibold mb-10 bg-transparent outline-none capitalize"
              placeholder="Add section Title"
            />
            <textarea
              type="text"
              value={sectionDesc}
              onChange={(e) => setSectionDesc(e.target.value)}
              className="text-gray-300 bg-transparent outline-none"
              placeholder="Add Content"
              style={{
                resize: "none",
                height: "70vh",
                lineHeight: "30px",
                paddingRight: "30px",
              }}
            />
          </div>
        </div>
        <div className="w-[35%] flex flex-col">
          <div
            className={` border-2 ${
              isExpanded ? "h-fit" : "h-[7vh]"
            }  border-[#81a77c94] p-4  rounded-md shadow-box bg-[#0f20183f]`}
          >
            <div
              className="flex justify-between items-center mb-3 cursor-pointer"
              onClick={toggleTableOfContents}
            >
              <h2 className="capitalize text-xl font-bold">
                Table of Contents
              </h2>
              {isExpanded ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
            </div>
            <ul
              className={`text-gray-200 h-fit overflow-y-scroll ${
                isExpanded ? "block mt-5 pr-5" : "hidden"
              }`}
            >
              {sectionsList}
              <button
                onClick={handleAddSection}
                className="mt-5 mb-2 py-2 px-4 gap-3 border border-[#5de8484d] rounded-md hover:bg-slate-800 text-gray-400 text-lg font-bold pr-4 flex justify-between items-center"
              >
                Add section <GoPlus size={25} />
              </button>
            </ul>
          </div>
          <Link
            to="/learn/createMaze/preview"
            className="py-2 px-4 w-full border border-[#5EE848] rounded-md mt-10 text-lg text-[#5EE848] hover:bg-[#5de8481c] text-center"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateMazeContent;
