// import { FaFireAlt } from "react-icons/fa";
// import { CiTrophy } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { LuSwords } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
// import { useHomeContext } from "@/pages/Home";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  // const { data } = useHomeContext();
  // const username = data.full_name;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    switch (true) {
      case location.pathname.startsWith("/dashboard"):
        setActiveItem("dashboard");
        break;
      case location.pathname.startsWith("/learn"):
        setActiveItem("learn");
        break;
      case location.pathname.startsWith("/compete"):
        setActiveItem("compete");
        break;
      default:
        setActiveItem("");
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className="flex p-7 justify-between items-center text-white border-b border-gray-500">
      <Link to={"/dashboard"} className="flex">
        <img src="/Logo2.png" alt="logo" className="w-10 mr-4" />

        <h2 className="sm:text-2xl lg:text-3xl text-white">HackMaze</h2>
      </Link>
      <div>
        <ul className="flex font-medium text-xl">
          <Link to={"/dashboard"}>
            <li
              className={`flex items-center cursor-pointer ${
                activeItem === "dashboard"
                  ? "text-[#5EE848]"
                  : "hover:text-[#5de84881]"
              }`}
              onClick={() => handleItemClick("dashboard")}
            >
              <MdOutlineDashboard className="mr-1" size={25} />
              Dashboard
            </li>
          </Link>
          <Link to={"/learn"}>
            <li
              className={`mx-12 flex items-center relative cursor-pointer ${
                activeItem === "learn"
                  ? "text-[#5EE848]"
                  : "hover:text-[#5de84881]"
              }`}
              onClick={() => handleItemClick("learn")}
            >
              <LuGraduationCap className="mr-1" size={30} />
              Learn
            </li>
          </Link>
          <Link to={"/compete"}>
            <li
              className={`flex items-center cursor-pointer ${
                activeItem === "compete"
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
        <div className="mx-6 cursor-pointer">
          <IoMdNotificationsOutline size={35} />
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <div className="border border-[#5de848] rounded-full">
            {/* <img
              className="p-2"
              src={`https://api.dicebear.com/7.x/initials/svg?size=25&seed=${username}&backgroundColor=11221a&textColor=ffffff&radius=50&fontSize=60&fontWeight=100`}
              alt="profile"
            /> */}
            {isDropdownOpen && <Dropdown />}
          </div>
          <FaAngleDown />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
