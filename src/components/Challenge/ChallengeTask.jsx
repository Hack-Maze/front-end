/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

const ChallengeTask = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [answer, setAnswer] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleAnswerSubmit = () => {
    if (answer.trim() !== '' && answer == props.answer ) {
      setIsCompleted(true);
      setInputDisabled(true);
    }
  };

  return (
    <div className="my-5 w-[90%] m-auto">
      <div className="list">
        <div className="bg-slate-600 p-5 ">
          <div className="flex justify-between w-full hover:cursor-pointer " onClick={() => setIsActive(!isActive)}>
            <div className="flex">
              <span className={`${isCompleted ? 'text-green-600' : 'text-red-600'} text-base font-medium`}>Task {props.taskNumber}</span>
              <button className="mx-2">
                {isCompleted ? (
                  <FaCheckCircle className="text-green-500 hover:text-green-700" />
                ) : (
                  <FaCircle className="text-transparent border-2 rounded-full border-gray-200" />
                )}
              </button>
              <h4 className="text-gray-200 font-semibold text-base">{props.taskTitle}</h4>
            </div>
            <span
              className={`text-xl duration-75 ${isActive ? 'rotate-270' : 'rotate-90'} text-gray-200`}
            >
              &gt;
            </span>
          </div>
          <div className={` text-gray-100  bg-slate-500 ${isActive ? 'max-h-0 duration-300' : 'max-h-fit py-5 duration-300'} overflow-hidden `}>
            <div className='w-[80%] m-auto'>

            <div className="my-5">
              {props.data}
            </div>
            <div >
              <input
                type="text"
                id="inputId"
                className="rounded-sm mr-4 p-1 border-0 focus:border-0 text-gray-800"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={inputDisabled} 
              />
              <button
                type="submit"
                className="px-3 py-1 rounded-md bg-green-500 font-semibold"
                onClick={handleAnswerSubmit}
              >
                Submit
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeTask;
