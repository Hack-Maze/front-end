import React from "react";
import Background from "../components/Background/Background";
import Hero from "../components/Landing/Hero";
import Body from "../components/Landing/Body";
import Footer from "../components/Landing/Footer";

const LandingPage = () => {
  return (
    <Background>
      <div className="flex flex-col overflow-hidden">
        <Hero />
        <Body />
        <Footer />
      </div>
    </Background>
  );
};

export default LandingPage;
