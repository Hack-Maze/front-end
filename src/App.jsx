import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/authPage";
import LandingPage from "./pages/Landing/LandingPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Roadmap from "./pages/Roadmap/Roadmap";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
};

export default App;
