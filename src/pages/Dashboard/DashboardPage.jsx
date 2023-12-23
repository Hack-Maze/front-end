import React from "react";
import { Link } from "react-router-dom";
import { FaFireAlt } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { LuGraduationCap, LuSwords } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const DashboardPage = () => {
  return (
    <div className="bg-[#171616]">
      <header className="flex mx-6 my-4 justify-between items-center text-white">
        <div className="flex items-center">
          <div>
            <img src="/logo.svg" alt="logo" className="w-10 mr-4" />
          </div>
          <div>
            <div className="uppercase flex items-center mb-1 font-semibold">
              <FaFireAlt className="text-red-500 mr-1" size={20} /> Streake
              <p className="ml-1">100</p>
            </div>
            <div className="uppercase flex items-center text-sm">
              <CiTrophy className="text-yellow-500 mr-1" size={20} />
              Rank <p className="ml-1">#100</p>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex font-medium">
            <li className="flex items-center text-red-500 cursor-pointer">
              {" "}
              <MdOutlineDashboard className="mr-1" size={25} />
              Dashboard
            </li>
            <li className="mx-12 flex items-center cursor-pointer">
              {" "}
              <LuGraduationCap className="mr-1" size={25} />
              Learn
            </li>
            <li className="flex items-center cursor-pointer">
              {" "}
              <LuSwords className="mr-1" size={25} />
              Compete
            </li>
          </ul>
        </div>
        <div className="flex">
          <div>
            <HiOutlineMagnifyingGlass size={25} />
          </div>
          <div className="mx-6">
            <IoMdNotificationsOutline size={25} />
          </div>
          <div>account</div>
        </div>
      </header>
      <body className="border-t h-[53vh]"></body>
      <footer className="border-t text-white">
        <div className="grid items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:px-8 px-5 py-8">
          <ul className="px-5 sm:m-auto sm:mt-0 sm:text-start flex sm:block flex-col">
            <img
              src="/logo.svg"
              alt="logo"
              className="sm:w-[120px] w-[100px]"
            />
          </ul>
          <ul className="text-center sm:text-start sm:m-auto sm:mt-0">
            <h1 className="mb-1 font-semibold capitalize">overview</h1>
            <li>
              <Link
                to={"/services"}
                className=" capitalize hover:text-gray-400 duration-200 text-sm cursor-pointer leading-8 underline"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className=" capitalize hover:text-gray-400 duration-200 text-sm cursor-pointer leading-8 underline"
              >
                contact us
              </Link>
            </li>
          </ul>
          <ul className="text-center sm:text-start sm:m-auto sm:mt-0">
            <h1 className="mb-1 font-semibold capitalize">usefull links</h1>

            <li>
              <Link
                to={"/about"}
                className=" capitalize hover:text-gray-400 duration-200 text-sm cursor-pointer leading-8 underline"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to={"/help"}
                className=" capitalize hover:text-gray-400 duration-200 text-sm cursor-pointer leading-8 underline"
              >
                help
              </Link>
            </li>
          </ul>
          <ul className="text-center sm:text-start sm:m-auto">
            <h1 className="mb-1 font-semibold capitalize">law and order</h1>

            <li>
              <Link
                to={"/terms-of-service"}
                className=" capitalize hover:text-gray-400 duration-200 text-sm cursor-pointer leading-8 underline"
              >
                terms of service
              </Link>
            </li>
            <li>
              <Link
                to={"/data-protection"}
                className=" capitalize hover:text-gray-400 duration-200 text-sm cursor-pointer leading-8 underline"
              >
                data protection
              </Link>
            </li>
            <li>
              <Link
                to={"/cookies"}
                className=" capitalize hover:text-gray-400 duration-200 text-sm cursor-pointer leading-8 underline"
              >
                cookies
              </Link>
            </li>
            <li>
              <Link
                to={"/legal-notices"}
                className=" capitalize hover:text-gray-400 duration-200 text-sm cursor-pointer leading-8 underline"
              >
                legal notices
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm pb-5 flex justify-between mx-6 font-bold">
          <span>&copy; 2023 HackMaze.</span>
          <p className="capitalize ">enjoy your time with us</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
