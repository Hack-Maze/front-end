import { useEffect, useState } from "react";
import { learns } from "@/static/data";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";

import logo from "/logo.png";

const Maze = () => {
  const { title, mazePage } = useParams();
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [completedSections, setCompletedSections] = useState([]);
  const navigate = useNavigate();

  const formattedTitle = title.replace(/-/g, " ");

  const sections =
    learns.find((learn) => learn.title.toLowerCase() === formattedTitle)
      ?.sections || [];

  const section = sections[selectedSectionIndex];

  useEffect(() => {
    const foundIndex = sections.findIndex(
      (section) => section.title.toLowerCase().replace(/\s/g, "-") === mazePage
    );
    setSelectedSectionIndex((prevIndex) => {
      return foundIndex !== -1 ? foundIndex : prevIndex;
    });
  }, [mazePage, sections]);

  const handleSectionClick = (index) => {
    setSelectedSectionIndex(index);
    navigate(`/learn/${title}/${sections[index].title.replace(/\s/g, "-")}`);
  };

  const handleComplete = () => {
    const updateCompletedSections = [
      ...completedSections,
      selectedSectionIndex,
    ];
    setCompletedSections(updateCompletedSections);
  };

  const sectionsList = sections.map((section, index) => (
    <li
      key={index}
      className={`leading-7 p-2 bg-[#d9d9d917] mb-3 rounded-md cursor-pointer flex items-center justify-between ${
        selectedSectionIndex === index ? "text-[#5EE848]" : ""
      }`}
      onClick={() => handleSectionClick(index)}
    >
      {section.title}
      {completedSections.includes(index) && (
        <IoCheckmarkCircleOutline className="text-[#5EE848] ml-2" size={20} />
      )}
    </li>
  ));

  const toggleTableOfContents = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNextBtn = () => {
    console.log("Next button clicked");
    if (selectedSectionIndex < sections.length - 1) {
      const nextIndex = selectedSectionIndex + 1;
      setSelectedSectionIndex(nextIndex);
      navigate(
        `/learn/${title}/${sections[nextIndex].title.replace(/\s/g, "-")}`
      );
    }
  };

  const handlePreviousBtn = () => {
    if (selectedSectionIndex > 0) {
      const previousIndex = selectedSectionIndex - 1;
      setSelectedSectionIndex(previousIndex);
      navigate(
        `/learn/${title}/${sections[previousIndex].title.replace(/\s/g, "-")}`
      );
    }
  };

  return (
    <div className="w-[75vw] min-h-[85vh] m-auto my-10 text-white">
      <div className="flex justify-between my-10">
        <div className="w-full flex flex-col justify-between">
          <div className="w-[80%] leading-9 min-h-[70vh]">
            <h1 className="text-3xl font-semibold mb-4">{section.title}</h1>
            <p className="text-gray-300">{section.desc}</p>
          </div>
          <div className="w-[80%] px-5 py-6 rounded-md border border-[#81a77c94] flex flex-row justify-between">
            <div className="flex">
              {selectedSectionIndex > 0 && (
                <button
                  className="capitalize border border-gray-400 py-2 px-5 text-lg rounded-md hover:bg-slate-800 mr-4 flex items-center"
                  onClick={handlePreviousBtn}
                >
                  <span>
                    <RxTrackPrevious size={20} className="mr-3" />
                  </span>
                  previous
                </button>
              )}
              <img src={logo} alt="logo" className="w-12" />
              <button
                className="capitalize border border-gray-400 py-2 px-8 text-lg rounded-md hover:bg-slate-800 ml-4 flex items-center"
                onClick={handleNextBtn}
              >
                next
                <span>
                  <RxTrackNext size={20} className="ml-3" />
                </span>
              </button>
            </div>
            {!completedSections.includes(selectedSectionIndex) && (
              <button
                className="capitalize text-[#5EE848] border border-[#5EE848] py-2 px-5 text-lg font-semibold rounded-md hover:bg-slate-800 mr-5 flex items-center"
                onClick={handleComplete}
              >
                mark as complete
                <span>
                  <IoCheckmarkCircleOutline size={25} className="ml-3" />
                </span>
              </button>
            )}
          </div>
        </div>
        <div
          className={` border-2 ${
            isExpanded ? "h-full" : "h-[7vh]"
          }  border-[#81a77c94] p-4 w-[35%] rounded-md shadow-xl `}
        >
          <div
            className="flex justify-between items-center mb-3 cursor-pointer"
            onClick={toggleTableOfContents}
          >
            <h2 className="capitalize text-xl font-bold">Table of Contents</h2>
            {isExpanded ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
          </div>
          <ul
            className={`text-gray-200 h-[80vh] overflow-scroll ${
              isExpanded ? "block mt-5 pr-5" : "hidden"
            }`}
          >
            {sectionsList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Maze;
