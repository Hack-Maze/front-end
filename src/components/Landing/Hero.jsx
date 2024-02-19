import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style.css";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollDown = (e) => {
    e.preventDefault();
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <div
      className="flex flex-col h-screen py-3 px-7 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(15, 32, 24, 0.99),rgb(10, 18, 26))",
        backdropFilter: "blur(15px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-row justify-between items-baseline"
      >
        <div className="flex mb-4">
          <div>
            <img
              src="/Logo2.png"
              alt="logo"
              className="w-6 sm:w-8 lg:w-10 mr-1 sm:mr-3 lg:mr-5"
            />
          </div>
          <h1 className="sm:text-2xl lg:text-3xl text-white">HackMaze</h1>
        </div>
        <Link
          to={"/login"}
          className="cursor-pointer font-bold text-center border py-2 px-4 rounded-md border-[#585B74] text-gray-400 hover:bg-gray-500 hover:text-white"
        >
          login
        </Link>
      </motion.div>
      <div className="flex flex-row gap-4 items-center justify-center w-auto h-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col gap-6 items-start justify-start w-auto md:w-full"
        >
          <h1 className="leading-normal text-6xl text-white font-bold">
            <span className="text-[#5EE848]">Hack</span>, Solve &amp; <br />
            Go Beyond The How.
          </h1>
          <p className="leading-15 text-2xl text-white">
            Unlock True Cybersecurity Mastery with Our Unique Approach.
          </p>
          <div className="flex flex-row gap-10">
            <Link
              to={"/register"}
              className="cursor-pointer text-white font-semibold flex h-14 px-5 rounded-lg border-2 hover:text-[#5EE848] hover:bg-gray-700 border-[#5EE848] items-center"
            >
              <span className="mr-2">Get Started</span> &rarr;
            </Link>
            <span
              className="cursor-pointer text-base text-white font-semibold flex items-center hover:text-gray-300 smooth-scroll"
              onClick={scrollDown}
            >
              <span className="mr-2 underline">Learn More</span> &darr;
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="w-full flex justify-center"
        >
          <img
            className="rotate-infinite"
            src="/hero.png"
            alt="hero"
            style={{ filter: "brightness(0.9)" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
