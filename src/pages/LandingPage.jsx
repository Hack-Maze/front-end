import React, { useEffect } from "react";
import Background from "../components/Background/Background";
import Hero from "../components/Landing/Hero";
import Body from "../components/Landing/Body";
import Footer from "../components/Landing/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/dashboard");
    }
  }, []);
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
