import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Dropdown = ({ handleOnLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    handleOnLogout();
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center text-[#86D90B] text-xl font-bold focus:outline-none "
          onClick={toggleDropdown}
        >
          <span className="mr-2">&darr;Username</span>
          <FaUserCircle size={40} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-[35px] mt-2 py-2 w-28 bg-white border rounded shadow-lg">
          <button
            type="button"
            className="block w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Profile
          </button>
          <button
            type="button"
            className="block w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
