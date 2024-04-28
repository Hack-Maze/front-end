import React from "react";
import HeatMap from "@uiw/react-heat-map";

const Activity = () => {
  const startDate = new Date("2024/01/01");
  const endDate = new Date("2024/12/31");
  const value = [];

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    value.push({
      date: `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(
        2,
        "0"
      )}/${String(d.getDate()).padStart(2, "0")}`,
      count: Math.floor(Math.random() * 10),
      content: "",
    });
  }

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-fit-content border-2 rounded-md border-gray-700">
        <div className="flex justify-center">
          {/* Week Labels */}
          <div className="flex flex-col items-center mt-7 ml-3">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (label, index) => (
                <div key={index} className="text-[12px] text-[#ffffffd1]">
                  {label}
                </div>
              )
            )}
          </div>
          {/* HeatMap */}
          <div style={{ paddingLeft: "10px" }}>
            <HeatMap
              style={{
                color: "#ffffffd1",
                fontSize: "14px",
                paddingRight: "20px",
                paddingTop: "20px",
              }}
              value={value}
              legendCellSize={0}
              panelColors={{
                0: "#161B22",
                0: "#0E4429",
                4: "#006D32",
                10: "#26A641",
                20: "#39D353",
              }}
              width={900}
              space={5}
              weekLabels={0}
              startDate={startDate}
              rectStyle={(value) => ({
                fill: value.count > 0 ? "#2ea44f" : "#4c4c4d31",
                stroke: "#ffffff29",
                strokeWidth: "2px",
              })}
            />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="ml-5 text-[13px] text-gray-400">
            Activity events are measured by the number of machines started,
            questions answered.
          </span>

          <div className="mb-4 flex justify-end mr-4 gap-2">
            <span className="text-gray-400 text-sm">Less</span>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-900 rounded-sm"></div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-800 rounded-sm"></div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
            </div>
            <span className="text-gray-400 text-sm">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
