import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Background = ({ children }) => {
  const [showUpButton, setShowUpButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowUpButton(true);
    } else {
      setShowUpButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgb(9, 26, 18),rgb(11, 17, 26))",
        }}
      ></div>

      <div className="relative w-full flex flex-col z-30 font-Grotesk h-full">
        {children}
        {showUpButton && (
          <button
            className="fixed bottom-10 right-5 bg-[#013c3350] text-white p-2 rounded-md shadow-md cursor-pointer hover:bg-[#013c3331]"
            onClick={scrollToTop}
          >
            <FaArrowUp size={30} />
          </button>
        )}
      </div>
    </>
  );
};

export default Background;
