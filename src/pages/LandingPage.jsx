import { NavLink } from "react-router-dom";
import VantaBackground from "../components/VantaBackground/VantaBackground";

const LandingPage = () => {
  return (
    <VantaBackground>
      <div className="flex flex-row items-center h-full">
        <div className="flex flex-col w-[50%] ml-8">
          <h1 className="font-bold text-white text-5xl">HackMaze</h1>
          <div className="mt-12 mb-4 text-white font-bold text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            molestias a minima voluptatum explicabo dolorum necessitatibus
            blanditiis, laudantium numquam eligendi?
          </div>
          <NavLink to="/login" className="text-white text-xl underline">
            Join Now &rarr;
          </NavLink>
        </div>

        <div className="w-[50%] flex justify-center items-center">
          <img src="/logo.svg" alt="logo" className="w-[50%]" />
        </div>
      </div>
    </VantaBackground>
  );
};

export default LandingPage;
