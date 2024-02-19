import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgb(9, 20, 28),rgb(11, 17, 26))",
          backdropFilter: "blur(15px)",
        }}
      ></div>

      <div className="relative w-full flex flex-col z-30 font-Grotesk h-full">
        {children}
      </div>
    </>
  );
};

export default Background;
