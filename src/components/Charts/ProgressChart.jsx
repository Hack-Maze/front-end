import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressChart = ({ data }) => {
  const { currentLevel, nextLevelPoints, points } = data;
  const percentage = (points / nextLevelPoints) * 100;

  return (
    <div>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={2}
        styles={buildStyles({
          textColor: "#5EE848",
          textSize: "15px",
          pathColor: "#5EE848",
          trailColor: "#ABF2AA",
        })}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mr-16">Lv. {currentLevel}</span>
          <span className="text-5xl font-semibold text-[#5EE848] text-center">
            {percentage.toFixed(0)}%
          </span>
          <span className="text-lg text-[#5EE848]">
            {points}/{nextLevelPoints} Points
          </span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ProgressChart;
