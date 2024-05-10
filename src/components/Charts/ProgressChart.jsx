import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressChart = () => {
  return (
    <div>
      <CircularProgressbarWithChildren
        value={78}
        strokeWidth={2}
        styles={buildStyles({
          textColor: "#5EE848",
          textSize: "15px",
          pathColor: "#5EE848",
          trailColor: "#ABF2AA",
        })}
      >
        <div className="flex flex-col">
          <span className="text-sm ml-5">Lv.1</span>
          <span className="text-5xl font-semibold text-[#5EE848] text-center">
            78%
          </span>
          <span className="text-lg text-[#5EE848]">1000/1200 Points</span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ProgressChart;
