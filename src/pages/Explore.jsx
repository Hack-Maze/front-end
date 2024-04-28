import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { learns } from "@/static/data";
import { GiMaze } from "react-icons/gi";

const Explore = () => {
  const { title } = useParams();
  const location = useLocation();

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      behavior: "instant",
    };
    window.scrollTo(scrollOptions);
  }, [location]);

  const formattedTitle = title.replace(/-/g, " ");

  const course = learns.find(
    (course) => course.title.toLowerCase() === formattedTitle
  );

  const levelColors = {
    fundamental: { color: "text-green-600", bgColor: "bg-[#336c4794]" },
    easy: { color: "text-blue-600", bgColor: "bg-[#2e4868a1]" },
    medium: { color: "text-yellow-600", bgColor: "bg-[#6c652c8c]" },
    hard: { color: "text-red-700", bgColor: "bg-[#62282875]" },
  };

  const formattedSummary = course.summary
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  const sectionsList = course.sections.map((section, index) => (
    <li key={index} className="list-disc leading-7">
      {section.title}
    </li>
  ));

  const recommendedMazes = learns.filter((maze) => {
    return (
      maze.level.toLowerCase() === course.level.toLowerCase() &&
      maze.title.toLowerCase() !== course.title.toLowerCase()
    );
  });

  return (
    <div className="w-[75vw] min-h-[85vh] m-auto my-10 text-white">
      <div key={course.id}>
        <div className="border-2 border-[#81a77c94] p-4 pb-6 flex rounded-md justify-between items-center mb-10 shadow-box bg-[#0f20183f]">
          <div className="flex gap-5 items-center">
            <img src={course.img} alt={course.title} />
            <div className="w-[50%]">
              <h1 className="text-2xl font-semibold mb-2">{course.title}</h1>
              <p className="text-gray-300">{course.desc}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p
              className={`p-2 font-medium capitalize my-4 rounded-md tracking-wider ${
                levelColors[course.level.toLowerCase()].color
              } ${levelColors[course.level.toLowerCase()].bgColor}`}
            >
              {course.level}
            </p>
            <Link
              to={`/learn/${title.toLowerCase().replace(/\s/g, "-")}/${
                learns
                  .find(
                    (learn) =>
                      learn.title.toLowerCase() === formattedTitle.toLowerCase()
                  )
                  ?.sections[0]?.title?.replace(/\s/g, "-") || ""
              }`}
              className="border py-1 px-10 text-lg font-semibold rounded-md hover:bg-slate-800"
            >
              Enroll
            </Link>
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Maze Summary</h2>
            <div className="w-[90%] text-gray-300 leading-9">
              {formattedSummary}
            </div>
          </div>
          <div className="border-2 border-[#81a77c94] p-8  w-[80%] rounded-md shadow-box bg-[#0f20183f]">
            <div className="flex">
              <GiMaze size={30} />

              <h2 className="capitalize mb-2 ml-2 text-2xl font-bold">
                maze sections
              </h2>
            </div>
            <ul className="ml-8 text-gray-200">{sectionsList}</ul>
          </div>
        </div>
        {recommendedMazes.length > 0 && (
          <div className="flex flex-col">
            <div className="flex flex-col mb-5">
              <h2 className="capitalize text-2xl font-bold">
                recommended mazes
              </h2>
              <p className="text-gray-400">
                This module progresses you towards the following{" "}
                <span className="text-[#5EE848]">Mazes</span>
              </p>
            </div>
            {recommendedMazes.map((maze) => (
              <Link
                to={`/learn/${maze.title.toLowerCase().replace(/\s/g, "-")}`}
                key={maze.id}
                className="border-2 border-[#81a77c94] p-4 pb-6 flex rounded-lg justify-between items-center mb-10 shadow-box bg-[#0f20183f] hover:border-[#5de84844] transition duration-300 ease-in-out"
              >
                <div className="flex gap-5 items-center">
                  <img src={maze.img} alt={maze.title} />
                  <div className="w-[50%]">
                    <h1 className="text-2xl font-semibold mb-2">
                      {maze.title}
                    </h1>
                    <p className="text-gray-300">{maze.desc}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p
                    className={`p-2 font-medium capitalize my-4 rounded-md tracking-wider ${
                      levelColors[maze.level.toLowerCase()].color
                    } ${levelColors[maze.level.toLowerCase()].bgColor}`}
                  >
                    {maze.level}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
