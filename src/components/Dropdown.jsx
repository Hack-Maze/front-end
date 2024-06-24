import { Link, useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="absolute right-[35px] mt-2 py-2 w-28 bg-white border rounded shadow-lg">
      <Link
        to={"/profile"}
        className="block w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-200"
      >
        Profile
      </Link>
      <Link
        to={"/editProfile"}
        className="block w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-200"
      >
        Edit Profile
      </Link>
      <button
        type="button"
        className="block w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dropdown;
