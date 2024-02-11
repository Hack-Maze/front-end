import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFireAlt } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { LuGraduationCap, LuSwords } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
// import { GoCircle } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Layout_1 from "../../components/Layout_1/Layout_1";
import { GiSecurityGate } from "react-icons/gi";
import GIF from "../../assets/X.gif";

const DashboardPage = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col min-h-screen font-Incon">
      <div className="absolute top-0 left-0 w-full h-screen bg-[#000000d9] z-10"></div>
      <div
        className=" flex-grow relative"
        style={{
          backgroundImage: `url(${GIF})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <header className="flex mx-6 my-4 justify-between items-center text-white relative z-30">
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
              <li
                className={`flex items-center cursor-pointer ${
                  activeItem === "dashboard"
                    ? "text-red-500"
                    : "hover:text-red-400"
                }`}
                onClick={() => handleItemClick("dashboard")}
              >
                <MdOutlineDashboard className="mr-1" size={25} />
                Dashboard
              </li>
              <li
                className={`mx-12 flex items-center relative cursor-pointer ${
                  activeItem === "learn" ? "text-red-500" : "hover:text-red-400"
                }`}
                onClick={() => handleItemClick("learn")}
              >
                <LuGraduationCap className="mr-1" size={30} />
                Learn
                {activeItem === "learn" && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md">
                    <ul>
                      <Link
                        to={`/roadmap/offensive`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="py-2 px-4 hover:bg-slate-200 rounded-md">
                          Offensive
                        </li>
                      </Link>

                      <Link
                        to={`/roadmap/defensive`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="py-2 px-4 hover:bg-slate-200 rounded-md">
                          Defensive
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className={`flex items-center cursor-pointer ${
                  activeItem === "compete"
                    ? "text-red-500"
                    : "hover:text-red-400"
                }`}
                onClick={() => handleItemClick("compete")}
              >
                <LuSwords className="mr-1" size={25} />
                Compete
              </li>
            </ul>
          </div>
          <div className="flex">
            <div className="cursor-pointer">
              <HiOutlineMagnifyingGlass size={30} />
            </div>
            <div className="mx-6 cursor-pointer">
              <IoMdNotificationsOutline size={30} />
            </div>
            <div className="cursor-pointer">
              <FaCircleUser size={30} />
            </div>
          </div>
        </header>
        <body className="border-t border-gray-500 px-8 py-4 relative z-20">
          <div className="flex flex-row">
            <Layout_1
              box_1_title={"friends"}
              button={"add friends"}
              box_2_title={"skills matrix"}
            />
            <div className="w-full py-8 text-white flex justify-center">
              <div className="w-[80%]">
                <h1 className="text-3xl border-b-2 pb-3">
                  Current path challenges
                </h1>
                <div className="pt-2 flex justify-between">
                  <p className="text-xl ">
                    Continue with the Introduction to Cyber Security path
                  </p>
                  <div className="flex flex-col">
                    <span className="text-sm">Your Progress : 70%</span>
                    <div className="relative h-2 w-full bg-white rounded-lg mt-1">
                      <div
                        className="absolute top-0 left-0 h-full bg-red-500 rounded-lg"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4 border border-red-500 my-5 rounded-md bg-[#f8eded29] shadow-md shadow-[#fff3] cursor-pointer hover:bg-[#ffffff13]">
                  <div>
                    <GiSecurityGate size={60} />
                  </div>
                  <div className="flex flex-col ml-3">
                    <h2 className="pb-2 text-xl">
                      Intro to Offensive Security
                    </h2>
                    <p className="text-md">
                      Hack your first website (legally in a safe environment)
                      and experience an ethical hacker's job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Layout_1
              box_1_title={"tasks"}
              button={"add tasks"}
              box_2_title={"questions"}
            />
          </div>
        </body>
      </div>
      <footer className="border-t border-gray-500 w-full text-white bg-[#060606] relative z-20">
        <div className="flex justify-center">
          <div className="grid items-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10 lg:gap-16 sm:px-8 px-5 py-8">
            <ul className="px-5 sm:m-auto sm:mt-0 sm:text-start flex sm:block flex-col">
              <img
                src="/logo.svg"
                alt="logo"
                className="sm:w-[120px] w-[100px]"
              />
            </ul>
            <ul className="text-center sm:text-start sm:m-auto sm:mt-0">
              <h1 className="mb-1 font-semibold text-lg capitalize leading-7">
                overview
              </h1>
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
              <h1 className="mb-1 font-semibold capitalize text-lg">
                usefull links
              </h1>

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
              <h1 className="mb-1 font-semibold capitalize text-lg">
                law and order
              </h1>

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
