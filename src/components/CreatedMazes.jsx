import React, { useEffect, useState } from "react";
import empty from "/empty2.svg";
import customFetch from "../../utils/CustomFetsh";
import { Link } from "react-router-dom";
import LoadingItem from "./LoadingItem";
import { FaTrash } from "react-icons/fa6";
import { useHomeContext } from "@/pages/Home";

const CreatedMazes = ({ username }) => {
  const [createdMazes, setCreatedMazes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data } = useHomeContext();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [mazeToDelete, setMazeToDelete] = useState(null);

  useEffect(() => {
    const fetchCreatedMazes = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await customFetch.get(
          `maze/created-mazes/${username}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setCreatedMazes(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCreatedMazes();
  }, [username]);

  const handleDeleteMaze = async (mazeId) => {
    setShowDeleteConfirmation(true);
    setMazeToDelete(mazeId);
  };

  const confirmDeleteMaze = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      await customFetch.delete(`maze/${mazeToDelete}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCreatedMazes((prevMazes) =>
        prevMazes.filter((maze) => maze.id !== mazeToDelete)
      );
      setShowDeleteConfirmation(false);
    } catch (error) {
      console.log("Error deleting maze:", error);
    }
  };

  const cancelDeleteMaze = () => {
    setShowDeleteConfirmation(false);
    setMazeToDelete(null);
  };

  if (loading) {
    return <LoadingItem />;
  }

  if (error || createdMazes.length === 0) {
    return (
      <div className="text-white flex flex-col justify-center items-center">
        <img src={empty} alt="empty" className="h-80" />
        <h2 className="font-semibold">
          Failed to fetch created mazes. Please try again later.
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {createdMazes.map((maze) => (
          <div className="relative" key={maze.id}>
            {username === data.username && (
              <div
                className="absolute right-4 top-5 cursor-pointer"
                onClick={() => handleDeleteMaze(maze.id)}
                title="delete maze"
              >
                <FaTrash size={25} color="red" />
              </div>
            )}
            <Link
              to={`/learn/${maze.id}/${maze.title
                .toLowerCase()
                .replace(/\s/g, "-")}`}
              className="flex flex-col text-center justify-evenly border border-[#5874593a] bg-[#0f20183f] p-4 items-center rounded-md max-w-md shadow-box hover:border-[#5de84844] transition duration-300 ease-in-out"
            >
              <img
                src={maze.image}
                alt="image"
                className="h-40 w-72"
                loading="lazy"
              />

              <h2
                className="text-xl mt-5 w-52 h-16 text-white font-semibold"
                title={maze.title}
                style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
              >
                {maze.title.length > 30
                  ? maze.title.slice(0, 25).concat("...")
                  : maze.title}
              </h2>
            </Link>
            {showDeleteConfirmation && maze.id === mazeToDelete && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-5 rounded-md shadow-md">
                  <p className="text-lg text-gray-800 mb-3">
                    Are you sure you want to delete this maze?
                  </p>
                  <div className="flex justify-center gap-5">
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                      onClick={confirmDeleteMaze}
                    >
                      Yes, Delete
                    </button>
                    <button
                      className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                      onClick={cancelDeleteMaze}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CreatedMazes;
