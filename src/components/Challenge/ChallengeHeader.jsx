/* eslint-disable react/prop-types */
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function ChallengeHeader(props) {
  return (
    <div className="bg-slate-800">
      <div className="w-[90%] m-auto flex d-row p-2">
        <div className="flex flex-col pr-5 items-center">
          <button className="border-none">
            <FaThumbsUp className="text-gray-500 hover:text-gray-300" />
          </button>
          <span className="text-gray-400 font-medium py-1">{props.likes}</span>
          <button className="border-none">
            <FaThumbsDown className="text-gray-500 hover:text-gray-300" />
          </button>
        </div>
        <div className="">
          <h2 className="text-gray-200 text-3xl font-bold">{props.name}</h2>
          <p className="text-gray-400 text-md">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ChallengeHeader;
