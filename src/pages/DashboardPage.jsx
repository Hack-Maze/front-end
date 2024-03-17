import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFireAlt } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { LuSwords } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
// import { GoCircle } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Layout_1 from "../components/Layout_1/Layout_1";
import { Paths, RecPaths } from "../static/data";
import Background from "../components/Background/Background";
import customFetch from "../../utils/CustomFetsh";

const DashboardPage = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [username, setUsername] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    customFetch.get('users/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        const { full_name } = response.data;
        setUsername(full_name);
      })
      .catch(error => {
        console.error('Error fetching user information:', error);
      });
  }, []);

  return (
    <Background>
      {/* <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom, rgba(15, 32, 24, 0.988),rgb(10, 18, 26))",
      }}
    > */}
      <header className="flex p-7 justify-between items-center text-white border-b border-gray-500">
        <Link to={"/dashboard"} className="flex">
          <img src="/Logo2.png" alt="logo" className="w-10 mr-4" />

          <h2 className="sm:text-2xl lg:text-3xl text-white">HackMaze</h2>
        </Link>
        <div>
          <ul className="flex font-medium text-xl">
            <li
              className={`flex items-center cursor-pointer ${activeItem === "dashboard"
                  ? "text-[#5EE848]"
                  : "hover:text-[#5de84881]"
                }`}
              onClick={() => handleItemClick("dashboard")}
            >
              <MdOutlineDashboard className="mr-1" size={25} />
              Dashboard
            </li>
            <li
              className={`mx-12 flex items-center relative cursor-pointer ${activeItem === "learn"
                  ? "text-[#5EE848]"
                  : "hover:text-[#5de84881]"
                }`}
              onClick={() => handleItemClick("learn")}
            >
              <LuGraduationCap className="mr-1" size={30} />
              Learn
              {/* {activeItem === "learn" && (
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
              )} */}
            </li>
            <li
              className={`flex items-center cursor-pointer ${activeItem === "compete"
                  ? "text-[#5EE848]"
                  : "hover:text-[#5de84881]"
                }`}
              onClick={() => handleItemClick("compete")}
            >
              <LuSwords className="mr-1" size={25} />
              Compete
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="cursor-pointer">
            <HiOutlineMagnifyingGlass size={35} />
          </div>
          <div className="mx-6 cursor-pointer">
            <IoMdNotificationsOutline size={35} />
          </div>
          <div className="cursor-pointer border border-[#5de848] rounded-full hover:border-[#5de8487e]">
            <img
              className="p-2"
              src={`https://api.dicebear.com/7.x/initials/svg?size=25&seed=${username}&backgroundColor=11221a&textColor=ffffff&radius=50&fontSize=60&fontWeight=100`}
              alt="profile"
            />

          </div>
        </div>
      </header>
      <body className="w-[80%] flex flex-col px-8 py-7 mx-auto text-white">
        <div className="flex flex-row justify-between mb-5">
          <div className="w-[65%] ">
            <h2 className="text-3xl border-b-2 pb-3">Learning Paths</h2>
            <div className="pt-2 flex justify-between">
              <p className="text-xl ">
                Continue with the intro of Cyber Security paths
              </p>
              {/* <div className="flex flex-col">
                  <span className="text-sm">Your Progress : 70%</span>
                  <div className="relative h-2 w-full bg-white rounded-lg mt-1">
                    <div
                      className="absolute top-0 left-0 h-full bg-red-500 rounded-lg"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div> */}
            </div>
            {Paths.map((path, index) => (
              <Link
                key={index}
                to={path.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center p-4 border border-[#5de848] my-7 rounded-md bg-[#f8eded29] shadow-md shadow-[#fff3] cursor-pointer hover:bg-[#ffffff13]"
              >
                <div className="">{path.icon}</div>
                <div className="flex flex-col ml-5">
                  <h2 className="pb-2 text-2xl">{path.title}</h2>
                  <p className="text-md">{path.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <Layout_1
            box_1_title={"skills"}
            // button={"add tasks"}
            box_2_title={"challenges"}
          />
        </div>
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-3xl">Recommended Paths</h2>
          <p className="text-xl text-gray-400 mb-2">
            Based on your skills matrix
          </p>
          <div className="flex flex-row justify-between gap-10">
            {RecPaths.map((recPath, index) => (
              <div
                key={index}
                className="flex flex-col text-center justify-evenly border border-[#5874593a] bg-[#0f20183f] p-8 items-center rounded-md max-w-md shadow-box"
              >
                <img src={recPath.img} alt="image" className="w-40" />
                <h2 className="text-2xl my-3">{recPath.title}</h2>

                <p className={"text-base text-gray-400 px-3"}>
                  {recPath.desc.length > 130
                    ? `${recPath.desc.substring(0, 130)}...`
                    : recPath.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </body>
      <footer className="border-t border-gray-500 w-full text-white">
        <div className="text-sm m-5 flex justify-between mx-6 font-bold">
          <span>&copy; 2023 HackMaze.</span>
          <p className="capitalize ">enjoy your time with us</p>
        </div>
      </footer>
      {/* </div> */}
    </Background>
  );
};

export default DashboardPage;
