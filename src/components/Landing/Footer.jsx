import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 md:gap-6 text-white px-2 md:px-7 mt-5 mb-10 md:w-[95%]">
      <hr className="flex-grow border-gray-500 my-5" />
      <h2 className="text-lg md:text-4xl font-bold">Say goodbye to boring & Loneliness</h2>
      <h3 className="md:text-2xl font-medium">Keep Up With Us</h3>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-row gap-5 md:w-[50vw] lg:w-[30vw]">
          <input
            type="email"
            placeholder="Your email address"
            className="py-1 md:py-2 px-3 mr-5 text-sm md:text-base bg-[#2E3251] w-full outline-none rounded-md border border-[#585b7484]"
          />
          <button
            type="submit"
            className="py-1 px-3 md:py-2 text-sm md:text-base md:px-7 hover:text-[#5EE848] hover:bg-gray-700 border border-[#5EE848] cursor-pointer rounded-md"
          >
            Submit
          </button>
        </div>
        <div className="my-auto pt-7 text-center text-sm md:text-base">
          <span>&copy; 2023 HackMaze</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
