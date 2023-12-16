import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import NET from "vanta/dist/vanta.net.min";

const LandingPage = () => {
  useEffect(() => {
    const netEffect = NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 0.5,
      scaleMobile: 1.0,
      color: 0x4e4e4e,
      backgroundColor: 0xa060f,
      points: 15.0,
      maxDistance: 20.0,
    });
    return () => {
      if (netEffect) netEffect.destroy();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-row items-center" id="vanta">
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
  );
};

export default LandingPage;
