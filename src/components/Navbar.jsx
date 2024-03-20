// import { FaFireAlt } from "react-icons/fa";
// import { CiTrophy } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { LuSwords } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useHomeContext } from "@/pages/Home";


const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const { data } = useHomeContext();
  const username = data.full_name;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setActiveItem("dashboard");
        break;
      case "/learn":
        setActiveItem("learn");
        break;
      case "/compete":
        setActiveItem("compete");
        break;
      default:
        setActiveItem("dashboard");
        break;
    }
  }, [location.pathname]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (<header className="flex p-7 justify-between items-center text-white border-b border-gray-500">
    <Link to={"/dashboard"} className="flex">
      <img src="/Logo2.png" alt="logo" className="w-10 mr-4" />

      <h2 className="sm:text-2xl lg:text-3xl text-white">HackMaze</h2>
    </Link>
    <div>
      <ul className="flex font-medium text-xl">
        <Link to={'/dashboard'} >
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
        </Link>
        <Link to={'/learn'} >
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
        </Link>
        <Link to={'/compete'} >
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
        </Link>
      </ul>
    </div>
    <div className="flex items-center">
      <div className="cursor-pointer">
        <HiOutlineMagnifyingGlass size={35} />
      </div>
      <div className="mx-6 cursor-pointer">
        <IoMdNotificationsOutline size={35} />
      </div>
      <div className="cursor-pointer border border-[#5de848] rounded-full hover:border-[#5de8487e]" onClick={toggleDropdown}>
        <img
          className="p-2"
          src={`https://api.dicebear.com/7.x/initials/svg?size=25&seed=${username}&backgroundColor=11221a&textColor=ffffff&radius=50&fontSize=60&fontWeight=100`}
          alt="profile"
        />
        {isDropdownOpen && <Dropdown />}
      </div>
    </div>
  </header>)
}
export default Navbar;