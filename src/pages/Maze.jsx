import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp, FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosNavigate } from "react-icons/io";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";
import { FaRegQuestionCircle, FaCloudDownloadAlt } from "react-icons/fa";
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
  const [mazeData, setMazeData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [hints, setHints] = useState({});
  const [loading, setLoading] = useState(true);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [progressData, setProgressData] = useState(null);
  const [docker, setDocker] = useState(localStorage.getItem("dockerLink"));
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const file = localStorage.getItem("file");
  const type = localStorage.getItem("type");

  const fetchProgressData = async (pageId) => {
    try {
      const response = await customFetch.get(
        `progress/get-profile-page-progress/${pageId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.status === 200) {
        setProgressData(response.data);

        if (response.data.isCompleted && !completedSections.includes(pageId)) {
          setCompletedSections((prev) => [...prev, pageId]);
        }
      } else {
        toast.error("Error fetching progress data");
      }
    } catch (error) {
      console.log("Error fetching progress data:", error);
    }
  };

  useEffect(() => {
    const fetchMazeData = async () => {
      try {
        const response = await customFetch.get(`page/maze/${mazeId}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (response.status === 200) {
          const data = response.data;
          setMazeData(data);

          const completedPages = data
            .filter((page) => page.isCompleted)
            .map((page) => page.id);
          setCompletedSections(completedPages);
        } else {
          toast.error("Error fetching maze data");
        }
      } catch (error) {
        console.log("Error fetching maze data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMazeData();
  }, [mazeId, accessToken]);

  useEffect(() => {
    if (mazeData) {
      fetchProgressData(mazeData[selectedSectionIndex]?.id);
    }
  }, [mazeData, selectedSectionIndex, accessToken]);

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

  useEffect(() => {
    const handleStorageChange = () => {
      setDocker(localStorage.getItem("dockerLink"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const section = mazeData && mazeData[selectedSectionIndex];

  const handleSectionClick = (index) => {
    setSelectedSectionIndex(index);
    navigate(
      `/learn/${mazeId}/${title}/${mazeData[index].title.replace(/\s/g, "-")}`
    );
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleAnswerSubmit = async (pageId, questionId, answer) => {
    try {
      const response = await customFetch.post(
        `progress/solve-question/${questionId}?answer=${answer}`,
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
        fetchProgressData(pageId);
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const handleToggleHint = async (questionId) => {
    if (hints[questionId]) {
      setHints((prevHints) => ({
        ...prevHints,
        [questionId]: prevHints[questionId] ? null : hints[questionId],
      }));
    } else {
      const cachedHint = localStorage.getItem(`hint-${questionId}`);
      if (cachedHint) {
        setHints((prevHints) => ({
          ...prevHints,
          [questionId]: cachedHint,
        }));
      } else {
        try {
          const response = await customFetch.get(
            `question/hint/${questionId}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          if (response.status === 200) {
            const hint = response.data;
            localStorage.setItem(`hint-${questionId}`, hint);
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
    }
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestions((prevExpandedQuestions) => ({
      ...prevExpandedQuestions,
      [questionId]: !prevExpandedQuestions[questionId],
    }));
  };

  const isQuestionSolved = (questionId) => {
    console.log(progressData?.solvedQuestions);
    return progressData?.solvedQuestions?.find(
      (q) => q.id === questionId && q.solvedAt
    );
  };

  const sectionsList = mazeData.map((page, index) => {
    const isCompleted =
      completedSections.includes(page.id) ||
      (page.questions.length > 0 &&
        page.questions.every((question) =>
          progressData?.solvedQuestions?.find(
            (q) => q.id === question.id && q.solvedAt
          )
        ));

    return (
      <li
        key={index}
        className={`leading-7 p-2 bg-[#d9d9d917] mb-3 rounded-md cursor-pointer flex items-center justify-between capitalize ${
          selectedSectionIndex === index ? "text-[#5EE848]" : ""
        }`}
        onClick={() => handleSectionClick(index)}
      >
        {page.title.length > 25
          ? page.title.slice(0, 23).concat("...")
          : page.title}
        {isCompleted && (
          <IoCheckmarkCircleOutline className="text-[#5EE848] ml-2" size={20} />
        )}
      </li>
    );
  });

  const toggleTableOfContents = () => {
    setIsExpanded(!isExpanded);
  };

  const dockerLink = async () => {
    const toastId = toast.loading("Getting DNS Link...");
    try {
      const response = await customFetch.post(
        `maze/run-container/${mazeId}`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("dockerLink", data);
        toast.success(`Link fetched successfully`, { id: toastId });
      }
    } catch (error) {
      console.error("Error fetching docker link:", error);
      if (error.response && error.response.data) {
        console.error("Response data:", error.response.data);
      }
      toast.error("Error fetching docker link", { id: toastId });
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleMarkAsComplete = async (pageId) => {
    try {
      const response = await customFetch.post(
        `progress/mark-page-as-complete/${pageId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        setCompletedSections((prevCompletedSections) => [
          ...prevCompletedSections,
          pageId,
        ]);
        toast.success("Page marked as complete");
      } else {
        toast.error("Error marking page as complete");
      }
    } catch (error) {
      console.error("Error marking page as complete:", error);
      toast.error("Error marking page as complete");
    }
  };

  const handleComplete = () => {
    const section = mazeData[selectedSectionIndex];
    const allQuestionsSolved = section.questions.every((question) =>
      progressData?.solvedQuestions?.find(
        (q) => q.id === question.id && q.solvedAt
      )
    );

    if (allQuestionsSolved) {
      handleMarkAsComplete(section.id);
    }
    if (selectedSectionIndex < mazeData.length - 1) {
      window.scrollTo(0, 0);
    }
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

  const areAllPagesCompleted = () => {
    return mazeData.every(
      (page) =>
        completedSections.includes(page.id) ||
        (page.questions.length > 0 &&
          page.questions.every((question) =>
            progressData?.solvedQuestions?.find(
              (q) => q.id === question.id && q.solvedAt
            )
          ))
    );
  };

  if (loading) {
    return (
      <div className="text-center">
        <LoadingItem />
      </div>
    );
  }

  return (
    <div className="w-[75vw] min-h-[85vh] m-auto my-10 text-white">
      <div className="flex justify-between my-10 gap-10">
        <div className="w-[75%] flex flex-col justify-between">
          <div className="w-full leading-9 min-h-[70vh]">
            <h1
              className="text-3xl font-semibold mb-4 capitalize w-[90%]"
              style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
            >
              {section.title}
            </h1>
            <div
              className="custom-html-content w-[85%]"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
            <div className="flex flex-col w-[70%]">
              {section.questions.map((question, index) => (
                <div
                  key={index}
                  className="border border-[#81a77c94] px-4 py-3 my-9 rounded-md shadow-box bg-[#0f20183f] w-full"
                >
                  <h2
                    className="text-xl font-semibold flex items-center cursor-pointer"
                    onClick={() => toggleQuestion(question.id)}
                  >
                    <span className="flex items-center w-full capitalize">
                      <div className="flex w-[97%] items-center">
                        <FaRegQuestionCircle className="mr-3" size={25} />
                        <span
                          className="w-[90%]"
                          style={{
                            whiteSpace: "normal",
                            overflowWrap: "break-word",
                          }}
                        >
                          {question.content}
                        </span>
                      </div>
                      <span>
                        {expandedQuestions[question.id] ? (
                          <FaAngleUp size={20} />
                        ) : (
                          <FaAngleDown size={20} />
                        )}
                      </span>
                    </span>
                  </h2>
                  {expandedQuestions[question.id] && (
                    <div>
                      <input
                        type="text"
                        name="answer"
                        placeholder="Your answer"
                        value={
                          progressData?.solvedQuestions?.find(
                            (q) => q.id === question.id
                          )?.answer || answers[question.id]
                        }
                        onChange={(e) =>
                          handleAnswerChange(question.id, e.target.value)
                        }
                        className={`mt-4 border border-[#58745975] bg-[#081b1b] w-full rounded-md h-10 p-4 placeholder:text-gray-600 outline-none 
                          ${
                            isQuestionSolved(question.id)
                              ? "cursor-not-allowed text-gray-500"
                              : ""
                          }
                          `}
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
            {!completedSections.includes(section.id) &&
              section.questions.length === 0 &&
              !progressData?.isCompleted && (
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
            {areAllPagesCompleted() &&
              selectedSectionIndex === mazeData.length - 1 && (
                <Link
                  className="capitalize text-[#5EE848] border border-[#5EE848] py-2 px-5 text-lg font-semibold rounded-md hover:bg-slate-800 mr-5 flex items-center"
                  to="/learn"
                >
                  Explore more mazes
                </Link>
              )}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-[25%]">
          {type === "DOWNLOADABLE_FILE" ? (
            <a
              href={file}
              download={file}
              className="w-fit capitalize text-[#5EE848] border border-[#5EE848] py-2 px-5 text-lg font-semibold rounded-md hover:bg-slate-800 mr-5 flex items-center"
            >
              download file
              <span>
                <FaCloudDownloadAlt size={25} className="ml-3" />
              </span>
            </a>
          ) : type === "DOCKER_FILE" && !docker ? (
            <button
              className="w-fit capitalize text-[#5EE848] border border-[#5EE848] py-2 px-5 text-lg font-semibold rounded-md hover:bg-slate-800 mr-5 flex items-center"
              onClick={dockerLink}
            >
              Navigate maze
              <span>
                <IoIosNavigate size={25} className="ml-3" />
              </span>
            </button>
          ) : type === "DOCKER_FILE" && docker ? (
            <div className="mb-4">
              <label className="text-lg block text-gray-300 font-bold mb-2">
                Link:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={
                    docker.length > 30 ? docker.slice(0, 30) + "..." : docker
                  }
                  readOnly
                  className="shadow appearance-none border border-[#5EE848] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                />
                <FaRegCopy
                  size={20}
                  className="absolute top-0 right-0 mt-2 mr-3 cursor-pointer hover:text-[#5EE848]"
                  onClick={() => {
                    navigator.clipboard.writeText(docker);
                    toast.success("Link copied to clipboard!");
                  }}
                  title="copy link"
                />
              </div>
            </div>
          ) : null}

          <div
            className={`border-2 ${
              isExpanded ? "h-fit" : "h-[7vh]"
            } border-[#81a77c94] p-4 w-full rounded-md shadow-box bg-[#0f20183f]`}
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
              className={`text-gray-200 h-fit overflow-scroll ${
                isExpanded ? "block mt-5 pr-5" : "hidden"
              }`}
            >
              {sectionsList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maze;
