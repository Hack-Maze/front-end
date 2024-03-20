import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  return (
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

  );
};

export default Dropdown;
