import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-screen z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(19, 45, 19, 0.84),rgba(22, 47, 65, 0.90))",
          backdropFilter: "blur(15px)",
        }}
      ></div>
      <div
        className="bg-cover relative bg-no-repeat h-screen w-full"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="relative px-7 w-full flex flex-col z-30 font-Grotesk">
          {children}
        </div>
      </div>
    </>
  );
};

export default Background;
