import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 text-white px-7 mt-5 mb-10 w-[95%]">
      <hr className="flex-grow border-gray-500  my-5" />
      <h2 className="text-4xl font-bold">Say goodbye to boring & Loneliness</h2>
      <h3 className="text-2xl font-medium">Keep Up With Us</h3>
      <div className="flex flex-row gap-5 justify-between">
        <div className="flex flex-row gap-5 w-[35%] ">
          <input
            type="email"
            placeholder="Your email address"
            className="py-2 px-3 mr-5 bg-[#2E3251] w-full outline-none rounded-md border border-[#585b7484]"
          />
          <button
            type="submit"
            className="py-2 px-7 hover:text-[#5EE848] hover:bg-gray-700 border border-[#5EE848] cursor-pointer rounded-md"
          >
            Submit
          </button>
        </div>
        <div className="my-auto pt-7">
          <span>&copy; 2023 HackMaze</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
