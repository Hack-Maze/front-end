import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";
import { FaRegQuestionCircle } from "react-icons/fa";
import logo from "/logo.png";
import customFetch from "../../utils/CustomFetsh";
import { toast } from "sonner";
import LoadingItem from "@/components/LoadingItem";
import "react-quill/dist/quill.snow.css";
import "../assets/style.css";

const Maze = () => {
  const { mazeId, title, mazePage } = useParams();
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [completedSections, setCompletedSections] = useState([]);
  const [mazeData, setMazeData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [hints, setHints] = useState({});
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [progressData, setProgressData] = useState(null);
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
        } else {
          toast.error("Error fetching maze data");
        }
      } catch (error) {
        console.log("Error fetching maze data:", error);
      }
    };
    const fetchProgressData = async () => {
      try {
        const response = await customFetch.get(
          `progress/get-profile-page-progress`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (response.status === 200) {
          setProgressData(response.data);
        } else {
          toast.error("Error fetching progress data");
        }
      } catch (error) {
        console.log("Error fetching progress data:", error);
      }
    };

    fetchMazeData();
    fetchProgressData();
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

  const section = mazeData[selectedSectionIndex];

  const handleSectionClick = (index) => {
    setSelectedSectionIndex(index);
    navigate(
      `/learn/${mazeId}/${title}/${mazeData[index].title.replace(/\s/g, "-")}`
    );
  };

  const handleComplete = () => {
    setCompletedSections((prevCompletedSections) => [
      ...prevCompletedSections,
      selectedSectionIndex,
    ]);

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

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const accessToken = localStorage.getItem("accessToken");

  const handleAnswerSubmit = async (pageId, questionId, answer) => {
    try {
      const response = await customFetch.post(
        `progress/solve-question/${pageId}/${questionId}?answer=${answer}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Correct answer");
        toggleQuestion(questionId);
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const handleToggleHint = async (questionId) => {
    const cachedHint = localStorage.getItem(`hint-${questionId}`);
    if (cachedHint) {
      setHints((prevHints) => ({
        ...prevHints,
        [questionId]: prevHints[questionId] ? null : cachedHint,
      }));
    } else {
      try {
        const response = await customFetch.get(`question/hint/${questionId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.status === 200) {
          const hint = response.data;
          setHints((prevHints) => ({
            ...prevHints,
            [questionId]: hint,
          }));
        } else {
          toast.error("Error fetching hint");
        }
      } catch (error) {
        console.log("Error fetching hint:", error);
        toast.error("Error fetching hint");
      }
    }
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestions((prevExpandedQuestions) => ({
      ...prevExpandedQuestions,
      [questionId]: !prevExpandedQuestions[questionId],
    }));
  };

  const isQuestionSolved = (questionId) => {
    return (
      progressData &&
      progressData[0].questions.some(
        (question) => question.question.id === questionId && question.solvedAt
      )
    );
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
            <div
              className="custom-html-content"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
            <div className="flex flex-col">
              {section.questions.map((question, index) => (
                <div
                  key={index}
                  className="border border-[#81a77c94] px-4 py-3 my-4 rounded-md shadow-box bg-[#0f20183f]"
                >
                  <h2
                    className="text-xl font-semibold flex items-center justify-between cursor-pointer"
                    onClick={() => toggleQuestion(question.id)}
                  >
                    <span className="flex items-center">
                      <FaRegQuestionCircle className="mr-2" size={20} />
                      {question.content}
                    </span>
                    {expandedQuestions[question.id] ? (
                      <FaAngleUp size={20} />
                    ) : (
                      <FaAngleDown size={20} />
                    )}
                  </h2>
                  {expandedQuestions[question.id] && (
                    <div>
                      <input
                        type="text"
                        name="answer"
                        placeholder="Your answer"
                        value={
                          progressData[0].questions.find(
                            (q) => q.question.id === question.id
                          )?.question.answer || ""
                        }
                        onChange={(e) =>
                          handleAnswerChange(question.id, e.target.value)
                        }
                        className={`mt-4 border border-[#58745975] bg-[#081b1b] w-full rounded-md h-10 p-4 placeholder:text-gray-600 outline-none ${
                          isQuestionSolved(question.id)
                            ? "cursor-not-allowed text-gray-500"
                            : ""
                        }`}
                        disabled={isQuestionSolved(question.id)}
                      />
                      <div className="flex gap-7 items-center mt-4">
                        <button
                          onClick={() =>
                            handleAnswerSubmit(
                              section.id,
                              question.id,
                              answers[question.id]
                            )
                          }
                          className={`cursor-pointer font-bold text-center border px-2 w-fit rounded-md border-[#585B74] text-gray-400 hover:bg-gray-500 hover:text-white ${
                            isQuestionSolved(question.id)
                              ? "cursor-not-allowed text-gray-500 hover:text-gray-500 hover:bg-transparent"
                              : ""
                          }`}
                          disabled={isQuestionSolved(question.id)}
                        >
                          {isQuestionSolved(question.id)
                            ? "Answer submitted"
                            : "Submit Answer"}
                        </button>
                        <button
                          onClick={() => handleToggleHint(question.id)}
                          className="text-green-700 underline mb-2"
                        >
                          {hints[question.id] ? "Hide Hint" : "Show Hint"}
                        </button>
                      </div>
                      {hints[question.id] && (
                        <p className="text-gray-300 mt-4 bg-[#092020] w-fit px-3">
                          {hints[question.id]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
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
          className={`border-2 ${
            isExpanded ? "h-fit" : "h-[7vh]"
          } border-[#81a77c94] p-4 w-[35%] rounded-md shadow-box bg-[#0f20183f]`}
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
