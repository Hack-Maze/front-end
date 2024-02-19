import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-[400vh] z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgb(9, 20, 28),rgb(6, 12, 21))",
          backdropFilter: "blur(15px)",
        }}
      ></div>
      <div
        className="bg-cover relative bg-no-repeat h-screen w-full"
        style={{
          backgroundImage: "url('/abg.png')",
        }}
      >
        <div className="relative w-full flex flex-col z-30 font-Grotesk">
          {children}
        </div>
      </div>
    </>
  );
};

export default Background;
