import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/authPage";
import LandingPage from "./pages/Landing/LandingPage";
import "./App.css";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ErrorPage from "./pages/Error/404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
