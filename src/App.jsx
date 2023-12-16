import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Auth from "./pages/Auth/authPage";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
