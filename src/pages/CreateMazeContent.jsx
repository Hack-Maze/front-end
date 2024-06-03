import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { GoPlus, GoTrash, GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import customFetch from "../../utils/CustomFetsh";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateMazeContent = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionContent, setSectionContent] = useState("");
  const [sections, setSections] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddOrUpdateSection = async () => {
    const mazeId = localStorage.getItem("mazeId");
    const accessToken = localStorage.getItem("accessToken");
    if (sectionTitle.trim() === "" || sectionContent.trim() === "") {
      toast.error("Section title and content cannot be empty");
      return;
    }
    try {
      const newSection = {
        title: sectionTitle,
        content: sectionContent,
        description: "description",
      };
      let response;
      if (isEditing) {
        const updatedSections = [...sections];
        updatedSections[selectedSectionIndex] = {
          ...newSection,
          id: sections[selectedSectionIndex].id,
        };
        setSections(updatedSections);
        response = await customFetch.put(
          `page/update/${sections[selectedSectionIndex].id}`,
          newSection,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setIsEditing(false);
      } else {
        response = await customFetch.post(`page/${mazeId}`, newSection, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const newSectionWithId = { ...newSection, id: response.data };
        setSections([...sections, newSectionWithId]);
      }
      if (response.status === 200) {
        toast.success(
          isEditing
            ? "Section updated successfully"
            : "Section added successfully"
        );
      } else {
        toast.error(
          isEditing ? "Failed to update section" : "Failed to add section"
        );
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      setIsEditing(false);
    }
    setSectionTitle("");
    setSectionContent("");
  };

  const handleDeleteSection = async (index) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await customFetch.delete(`page/${sections[index].id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status === 200) {
        const updatedSections = sections.filter((_, i) => i !== index);
        setSections(updatedSections);
        toast.success("Section deleted successfully");
      } else {
        toast.error("Failed to delete section");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleSectionClick = (index) => {
    const selectedSection = sections[index];
    setSectionTitle(selectedSection.title);
    setSectionContent(selectedSection.content);
    setIsEditing(true);
    setSelectedSectionIndex(index);
  };

  const toggleTableOfContents = () => {
    setIsExpanded(!isExpanded);
  };

  const sectionsList = sections.map((section, index) => (
    <li
      key={index}
      className={`leading-7 p-2 bg-[#d9d9d917] mb-3 rounded-md flex items-center justify-between
      `}
    >
      <span>{section.title}</span>
      <div className="flex gap-2 ">
        <button
          onClick={() => handleSectionClick(index)}
          className="text-gray-400 cursor-pointer"
          title="Edit Section"
        >
          <GoPencil />
        </button>
        <button
          onClick={() => handleDeleteSection(index)}
          className="text-red-400 cursor-pointer"
          title="Delete Section"
        >
          <GoTrash />
        </button>
      </div>
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
              value={sectionContent}
              onChange={(e) => setSectionContent(e.target.value)}
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
            className={`border-2 ${
              isExpanded ? "h-fit" : "h-[7vh]"
            } border-[#81a77c94] p-4 rounded-md shadow-box bg-[#0f20183f]`}
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
              className={`text-gray-200 h-fit overflow-y-scroll capitalize ${
                isExpanded ? "block mt-5 pr-5" : "hidden"
              }`}
            >
              {sectionsList}
              <button
                onClick={handleAddOrUpdateSection}
                className="mt-5 mb-2 py-2 px-4 gap-3 border border-[#5de8484d] rounded-md hover:bg-slate-800 text-gray-400 text-lg font-bold pr-4 flex justify-between items-center"
              >
                {isEditing ? "Update section" : "Add section"}{" "}
                <GoPlus size={25} />
              </button>
            </ul>
          </div>
          <Link
            to="/learn/createMaze/success"
            className="py-2 px-4 w-full border border-[#5EE848] rounded-md mt-10 text-lg text-[#5EE848] hover:bg-[#5de8481c] text-center"
            onClick={() => localStorage.removeItem("mazeId")}
          >
            Save & Create
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateMazeContent;
