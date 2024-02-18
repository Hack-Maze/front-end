import React from "react";
import Background from "../components/Background/Background";
import Hero from "../components/Hero/Hero";

const LandingPage = () => {
  return (
    <Background>
      <div className="flex flex-col">
        <Hero />
      </div>
    </Background>
  );
};

export default LandingPage;
