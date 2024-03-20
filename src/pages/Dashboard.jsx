import React from 'react';
import { Paths, RecPaths } from "../static/data";
import { Link } from "react-router-dom";
import Layout_1 from "../components/Layout_1/Layout_1";

const Dashboard = () => {
    return (
        <div className="w-[80%] flex flex-col px-8 py-7 mx-auto text-white">
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
        </div>
    );
};

export default Dashboard;