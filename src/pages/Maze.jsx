import { useEffect, useState } from "react";
import { learns } from "@/static/data";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";

import logo from "/logo.png";
import customFetch from "../../utils/CustomFetsh";
import { toast } from "sonner";
import LoadingItem from "@/components/LoadingItem";

const Maze = () => {
  const { mazeId, title, mazePage } = useParams();
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [completedSections, setCompletedSections] = useState([]);
  const [mazeData, setMazeData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchMazeData = async () => {
      try {
        const response = await customFetch.get(`page/maze/${mazeId}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (response.status === 200) {
          setMazeData(response.data);
          console.log(response.data);
        } else {
          toast.error("Error fetching maze data");
        }
      } catch (error) {
        console.log("Error fetching maze data:", error);
      }
    };

    fetchMazeData();
  }, [mazeId]);

  useEffect(() => {
    if (mazeData) {
      const foundIndex = mazeData.findIndex(
        (page) => page.title.toLowerCase().replace(/\s/g, "-") === mazePage
      );
      setSelectedSectionIndex((prevIndex) =>
        foundIndex !== -1 ? foundIndex : prevIndex
      );
    }
  }, [mazeData, mazePage]);

  if (!mazeData) {
    return (
      <div className="text-center">
        <LoadingItem />
      </div>
    );
  }

  const formattedTitle = title.replace(/-/g, " ");

  const section = mazeData[selectedSectionIndex];

  const handleSectionClick = (index) => {
    setSelectedSectionIndex(index);
    navigate(
      `/learn/${mazeId}/${title}/${mazeData[index].title.replace(/\s/g, "-")}`
    );
  };

  const handleComplete = () => {
    const updateCompletedSections = [
      ...completedSections,
      selectedSectionIndex,
    ];
    setCompletedSections(updateCompletedSections);

    if (selectedSectionIndex < mazeData.length - 1) {
      const nextIndex = selectedSectionIndex + 1;
      setSelectedSectionIndex(nextIndex);
      navigate(
        `/learn/${mazeId}/${title}/${mazeData[nextIndex].title.replace(
          /\s/g,
          "-"
        )}`
      );
    }
  };

  const sectionsList = mazeData.map((page, index) => (
    <li
      key={index}
      className={`leading-7 p-2 bg-[#d9d9d917] mb-3 rounded-md cursor-pointer flex items-center justify-between ${
        selectedSectionIndex === index ? "text-[#5EE848]" : ""
      }`}
      onClick={() => handleSectionClick(index)}
    >
      {page.title}
      {completedSections.includes(index) && (
        <IoCheckmarkCircleOutline className="text-[#5EE848] ml-2" size={20} />
      )}
    </li>
  ));
  console.log(sectionsList);

  const toggleTableOfContents = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNextBtn = () => {
    if (selectedSectionIndex < mazeData.length - 1) {
      const nextIndex = selectedSectionIndex + 1;
      setSelectedSectionIndex(nextIndex);
      navigate(
        `/learn/${mazeId}/${title}/${mazeData[nextIndex].title.replace(
          /\s/g,
          "-"
        )}`
      );
    }
  };

  const handlePreviousBtn = () => {
    if (selectedSectionIndex > 0) {
      const previousIndex = selectedSectionIndex - 1;
      setSelectedSectionIndex(previousIndex);
      navigate(
        `/learn/${mazeId}/${title}/${mazeData[previousIndex].title.replace(
          /\s/g,
          "-"
        )}`
      );
    }
  };

  return (
    <div className="w-[75vw] min-h-[85vh] m-auto my-10 text-white">
      <div className="flex justify-between my-10">
        <div className="w-full flex flex-col justify-between">
          <div className="w-[80%] leading-9 min-h-[70vh]">
            <h1 className="text-3xl font-semibold mb-4">{section.title}</h1>
            <p className="text-gray-300">{section.content}</p>
          </div>
          <div className="w-[80%] px-5 py-6 rounded-md border border-[#81a77c94] flex flex-row justify-between shadow-box bg-[#0f20183f]">
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
              {selectedSectionIndex !== mazeData.length - 1 && (
                <button
                  className="capitalize border border-gray-400 py-2 px-8 text-lg rounded-md hover:bg-slate-800 ml-4 flex items-center"
                  onClick={handleNextBtn}
                >
                  next
                  <span>
                    <RxTrackNext size={20} className="ml-3" />
                  </span>
                </button>
              )}
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
            isExpanded ? "h-fit" : "h-[7vh]"
          }  border-[#81a77c94] p-4 w-[35%] rounded-md shadow-box bg-[#0f20183f]`}
        >
          <div
            className="flex justify-between items-center mb-3 cursor-pointer"
            onClick={toggleTableOfContents}
          >
            <h2 className="capitalize text-xl font-bold">Table of Contents</h2>
            {isExpanded ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
          </div>
          <ul
            className={`text-gray-200 h-fit overflow-scroll ${
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
