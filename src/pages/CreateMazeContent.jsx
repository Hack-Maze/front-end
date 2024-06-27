import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { GoPlus, GoTrash, GoPencil } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import customFetch from "../../utils/CustomFetsh";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateMazeContent = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionQuestion, setSectionQuestion] = useState("");
  const [sectionContent, setSectionContent] = useState("");
  const [sectionAnswer, setSectionAnswer] = useState("");
  const [sectionHint, setSectionHint] = useState("");
  const [sectionPoints, setSectionPoints] = useState(0);
  const [type, setType] = useState("STATIC");
  const [sections, setSections] = useState([]);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [createQuestion, setCreateQuestion] = useState(false);
  const [envList, setEnvList] = useState([]);
  const [selectedEnv, setSelectedEnv] = useState("");
  const [usedEnvs, setUsedEnvs] = useState([]);

  const fileType = localStorage.getItem("fileType");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSections();
    if (fileType === "DOCKER_FILE") {
      fetchEnvList();
    }
  }, []);

  const fetchSections = async () => {
    const mazeId = localStorage.getItem("mazeId");
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await customFetch.get(`page/maze/${mazeId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data);
        setSections(response.data);
      } else {
        toast.error("Failed to fetch sections");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const fetchEnvList = async () => {
    const mazeId = localStorage.getItem("mazeId");
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await customFetch.get(`maze/env-list/${mazeId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status === 200) {
        setEnvList(response.data);
      } else {
        toast.error("Failed to fetch environment list");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleAddOrUpdateContent = async () => {
    const mazeId = localStorage.getItem("mazeId");
    const accessToken = localStorage.getItem("accessToken");
    if (sectionTitle.trim() === "" || sectionContent.trim() === "") {
      toast.error("Section title and content cannot be empty");
      return;
    }
    if (sectionTitle.trim().length > 255) {
      toast.error("Title cannot exceed 255 characters.");
      return;
    }
    try {
      const newSection = {
        title: sectionTitle,
        content: sectionContent,
        description: "description",
      };
      let response;
      if (isEditingContent) {
        const updatedSections = [...sections];
        updatedSections[selectedSectionIndex] = {
          ...updatedSections[selectedSectionIndex],
          title: sectionTitle,
          content: sectionContent,
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
        setIsEditingContent(false);
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
          isEditingContent
            ? "Section updated successfully"
            : "Section added successfully"
        );
      } else {
        toast.error(
          isEditingContent
            ? "Failed to update section"
            : "Failed to add section"
        );
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      setIsEditingContent(false);
    }
    setSectionTitle("");
    setSectionContent("");
    window.scrollTo(0, 0);
  };

  const handleAddOrUpdateQuestion = async () => {
    const sectionId = sections[selectedSectionIndex]?.id;
    const accessToken = localStorage.getItem("accessToken");
    if (sectionQuestion.trim() === "" || sectionAnswer.trim() === "") {
      toast.error("Question and answer cannot be empty");
      return;
    }
    if (sectionQuestion.trim().length > 255) {
      toast.error("Question cannot exceed 255 characters.");
      return;
    }
    try {
      const newQuestion = {
        content: sectionQuestion,
        answer: sectionAnswer,
        hint: sectionHint,
        type: type,
        points: parseInt(sectionPoints, 10),
      };
      let response;
      if (isEditingQuestion) {
        if (sections[selectedSectionIndex]?.questions?.length > 0) {
          const questionId =
            sections[selectedSectionIndex].questions[selectedQuestionIndex].id;
          const updatedSections = [...sections];
          updatedSections[selectedSectionIndex] = {
            ...newQuestion,
            id: sections[selectedSectionIndex].id,
          };

          setSections(updatedSections);
          response = await customFetch.put(
            `question/update/${questionId}`,
            newQuestion,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          if (response.status === 200) {
            const updatedSections = [...sections];
            updatedSections[selectedSectionIndex].questions[
              selectedQuestionIndex
            ] = {
              ...newQuestion,
              id: questionId,
            };
            setSections(updatedSections);
            setIsEditingQuestion(false);
          }
          setIsEditingQuestion(false);
        }
      } else {
        setSectionQuestion("");
        setSectionAnswer("");
        setSectionHint("");
        setType("STATIC");
        setSectionPoints(0);
        response = await customFetch.post(
          `question/${sectionId}`,
          newQuestion,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const questionId = response.data;
        const newQuestionWithId = { ...newQuestion, id: response.data };
        const updatedSections = [...sections];
        if (!updatedSections[selectedSectionIndex].questions) {
          updatedSections[selectedSectionIndex].questions = [];
        }
        updatedSections[selectedSectionIndex].questions.push(newQuestionWithId);
        setSections(updatedSections);
        if (type === "DYNAMIC") {
          await customFetch.put(
            `question/assign-key-to-question/${questionId}?key=${selectedEnv}`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setUsedEnvs([...usedEnvs, selectedEnv]);
        }
        setUsedEnvs([...usedEnvs, selectedEnv]);
        setIsEditingQuestion(false);
      }
      if (response.status === 200) {
        toast.success(
          isEditingQuestion
            ? "Question updated successfully"
            : "Question added successfully"
        );
      } else {
        toast.error(
          isEditingQuestion
            ? "Failed to update question"
            : "Failed to add question"
        );
      }
    } catch (error) {
      toast.error(`Error: ${error.response.data}`);
      console.log(error);
      setIsEditingQuestion(false);
    }
    setSectionQuestion("");
    setSectionAnswer("");
    setSectionHint("");
    setType("STATIC");
    setSectionPoints(0);
    setCreateQuestion(false);
    window.scrollTo(0, 0);
  };

  const handleDeleteContent = async (index) => {
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
        toast.success("Page deleted successfully");
      } else {
        toast.error("Failed to delete page");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
    setSectionTitle("");
    setSectionContent("");
    setIsEditingContent(false);
  };

  const handleDeleteQuestion = async (sectionIndex, questionIndex) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await customFetch.delete(
        `question/${sections[sectionIndex].questions[questionIndex].id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].questions = updatedSections[
          sectionIndex
        ].questions.filter((_, i) => i !== questionIndex);
        setSections(updatedSections);
        toast.success("Question deleted successfully");
      } else {
        toast.error("Failed to delete question");
      }
    } catch (error) {
      toast.error(`Error: ${error.response.data}`);
      console.log(error);
    }
    setSectionQuestion("");
    setSectionAnswer("");
    setSectionHint("");
    setType("STATIC");
    setSectionPoints(0);
    setCreateQuestion(false);
  };

  const handleSectionClick = (index) => {
    setSelectedSectionIndex(index);
  };
  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index);
  };

  const handleEditSection = (index) => {
    setIsEditingContent(true);
    const section = sections[index];
    setSectionTitle(section.title);
    setSectionContent(section.content);
    setSelectedSectionIndex(index);
  };

  const handleEditQuestion = async (index, questionIndex) => {
    const questionId = sections[index].questions[questionIndex].id;
    const accessToken = localStorage.getItem("accessToken");
    try {
      const hintResponse = await customFetch.get(
        `question/hint/${questionId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const answerResponse = await customFetch.get(
        `question/answer/${questionId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (hintResponse.status === 200 && answerResponse.status === 200) {
        const questionData = sections[index].questions[questionIndex];
        handleQuestionClick(questionIndex);
        setSelectedSectionIndex(index);
        setIsEditingQuestion(true);
        setCreateQuestion(true);
        setSectionQuestion(questionData.content);
        setSectionAnswer(answerResponse.data);
        setSectionHint(hintResponse.data);
        setType(questionData.type);
        setSectionPoints(questionData.points);
      } else {
        toast.error("Failed to fetch question data for editing");
      }
    } catch (error) {
      toast.error(`Error: ${error.response.data}`);
      console.log(error);
    }
  };

  const toggleTableOfContents = () => {
    setIsExpanded(!isExpanded);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  const sectionsList = (sections || []).map((section, index) => (
    <li
      key={index}
      className={`leading-7 p-2 bg-[#d9d9d917] mb-3 rounded-md flex flex-col`}
    >
      <div className="flex items-center justify-between">
        <span title={section.title}>
          {section.title && section.title.length > 25
            ? section.title.slice(0, 25).concat("...")
            : section.title}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => handleEditSection(index)}
            className="text-gray-400 cursor-pointer"
            title="Edit page"
          >
            <GoPencil />
          </button>
          <button
            onClick={() => handleDeleteContent(index)}
            className="text-red-400 cursor-pointer"
            title="Delete page"
          >
            <GoTrash />
          </button>
        </div>
      </div>
      <div className="mt-2">
        {(section.questions || []).map((question, questionIndex) => (
          <div
            className="ml-2 flex justify-between items-center"
            key={questionIndex}
          >
            <span className="flex items-center" title={question.content}>
              <FaRegQuestionCircle className="mr-2" />
              {question.content && question.content.length > 20
                ? question.content.slice(0, 19).concat("...")
                : question.content}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditQuestion(index, questionIndex)}
                className="text-gray-400 cursor-pointer"
                title="Edit Question"
              >
                <GoPencil />
              </button>
              <button
                onClick={() => handleDeleteQuestion(index, questionIndex)}
                className="text-red-400 cursor-pointer"
                title="Delete Question"
              >
                <GoTrash />
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            setCreateQuestion(true), handleSectionClick(index);
          }}
          className="text-gray-400 cursor-pointer ml-2"
          title="Add Question"
        >
          Add Question
        </button>
      </div>
    </li>
  ));

  console.log(selectedEnv);

  return (
    <div className="w-[80%] m-auto my-10 text-white">
      <h1 className="text-3xl font-semibold">
        {!createQuestion ? "Create Page" : "Create Question"}{" "}
      </h1>
      <div className="flex justify-between my-10 ">
        <div className="w-[75%] flex flex-col justify-between">
          <div className="w-[80%] flex flex-col h-[63vh]">
            {!createQuestion ? (
              <>
                <input
                  type="text"
                  value={sectionTitle}
                  onChange={(e) => {
                    setSectionTitle(e.target.value);
                  }}
                  className="text-2xl font-semibold mb-10 bg-transparent outline-none capitalize border-b-2 border-gray-600"
                  placeholder="Add Title"
                />
                <div>
                  <ReactQuill
                    theme="snow"
                    value={sectionContent}
                    onChange={setSectionContent}
                    modules={modules}
                    formats={formats}
                    placeholder="Add content..."
                    style={{
                      height: "50vh",
                      marginBottom: "10px",
                      padding: "10px",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                    className="quill-editor"
                  />
                </div>
              </>
            ) : (
              <div className="flex flex-col">
                <input
                  type="text"
                  name="question"
                  placeholder="Add question"
                  className="text-xl font-semibold mb-10 bg-transparent outline-none capitalize border border-[#58745975] p-3 rounded-md"
                  value={sectionQuestion}
                  onChange={(e) => {
                    setSectionQuestion(e.target.value);
                  }}
                />
                <input
                  type="text"
                  name="answer"
                  placeholder="Add answer"
                  className="text-xl font-semibold mb-10 bg-transparent outline-none capitalize border border-[#58745975] p-3 rounded-md"
                  value={sectionAnswer}
                  onChange={(e) => {
                    setSectionAnswer(e.target.value);
                  }}
                />
                <input
                  type="text"
                  name="hint"
                  placeholder="Add hint"
                  className="text-xl font-semibold mb-10 bg-transparent outline-none capitalize border border-[#58745975] p-3 rounded-md"
                  value={sectionHint}
                  onChange={(e) => {
                    setSectionHint(e.target.value);
                  }}
                />
                <div className="flex mb-5 items-center">
                  <label className="text-xl font-semibold bg-transparent outline-none capitalize mr-4 text-gray-400">
                    Points:
                  </label>
                  <input
                    type="number"
                    name="points"
                    className="text-xl font-semibold bg-transparent outline-none capitalize border border-[#58745975] p-3 rounded-md"
                    value={sectionPoints}
                    defaultValue={0}
                    max={400}
                    onChange={(e) => {
                      setSectionPoints(e.target.value);
                    }}
                  />
                  {fileType === "DOCKER_FILE" && (
                    <div className="flex items-center">
                      <div className="ml-4 flex items-center">
                        <label className="text-xl font-semibold bg-transparent outline-none capitalize mr-4 text-gray-400">
                          Type:
                        </label>
                        <select
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                          className="text-xl font-semibold bg-transparent outline-none capitalize border border-[#58745975] p-3 rounded-md cursor-pointer"
                        >
                          <option
                            value="STATIC"
                            className="bg-gray-800 text-white"
                          >
                            Static
                          </option>
                          <option
                            value="DYNAMIC"
                            className="bg-gray-800 text-white"
                          >
                            Dynamic
                          </option>
                        </select>
                      </div>
                      {type === "DYNAMIC" && (
                        <div className="ml-4 flex items-center">
                          <label className="text-xl font-semibold bg-transparent outline-none capitalize mr-4 text-gray-400">
                            Env:
                          </label>
                          <select
                            value={selectedEnv}
                            onChange={(e) => setSelectedEnv(e.target.value)}
                            className="text-xl font-semibold bg-transparent outline-none capitalize border border-[#58745975] p-3 rounded-md cursor-pointer"
                          >
                            {selectedEnv && (
                              <option key={selectedEnv} value={selectedEnv}>
                                {selectedEnv}
                              </option>
                            )}
                            <option
                              value=""
                              disabled
                              className="bg-gray-800 text-white"
                            >
                              Choose an environment
                            </option>
                            {envList
                              .filter(
                                (env) =>
                                  env !== selectedEnv && !usedEnvs.includes(env)
                              )
                              .map((env) => (
                                <option
                                  key={env}
                                  value={env}
                                  className="bg-gray-800 text-white"
                                >
                                  {env}
                                </option>
                              ))}
                          </select>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleAddOrUpdateQuestion}
                  className="mt-5 mb-2 w-fit py-2 px-4 gap-3 border border-[#5de8484d] rounded-md hover:bg-slate-800 text-gray-400 text-lg font-bold pr-4 flex justify-between items-center"
                >
                  {isEditingQuestion ? "Update question" : "Add question"}
                  <GoPlus size={25} />
                </button>
                <div className="my-4">
                  <h3 className="text-xl mb-4">Important Note</h3>
                  <p className="text-gray-400 mb-2">
                    The maze has maximum number of points according to the level
                    of the maze:
                  </p>
                  <ul className="text-gray-400 list-disc ml-7">
                    <li>Fundamental: 100 points</li>
                    <li>Easy: 200 points</li>
                    <li>Medium: 300 points</li>
                    <li>Hard: 400 points</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[25%] flex flex-col">
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
              {!createQuestion ? (
                <button
                  onClick={handleAddOrUpdateContent}
                  className="mt-5 mb-2 py-2 px-4 gap-3 border border-[#5de8484d] rounded-md hover:bg-slate-800 text-gray-400 text-lg font-bold pr-4 flex justify-between items-center"
                >
                  {isEditingContent ? "Update page" : "Add page"}
                  <GoPlus size={25} />
                </button>
              ) : (
                <button
                  onClick={() => setCreateQuestion(false)}
                  className="mt-5 mb-2 py-2 px-4 gap-3 border border-[#5de8484d] rounded-md hover:bg-slate-800 text-gray-400 text-lg font-bold pr-4 flex justify-between items-center"
                >
                  Create page
                  <GoPlus size={25} />
                </button>
              )}
            </ul>
          </div>
          {sections.length > 0 && (
            <Link
              to="/learn/createMaze/success"
              className="py-2 px-4 w-full border border-[#5EE848] rounded-md mt-10 text-lg text-[#5EE848] hover:bg-[#5de8481c] text-center"
              onClick={() => localStorage.removeItem("mazeId")}
            >
              Save & Create
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateMazeContent;
