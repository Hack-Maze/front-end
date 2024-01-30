import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/authPage";
import LandingPage from "./pages/Landing/LandingPage";
import HomePage from "./pages/Dashboard/DashboardPage";
import Roadmap from "./pages/Roadmap/Roadmap";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
};

export default App;
