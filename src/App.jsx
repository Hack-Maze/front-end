import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/Error/404";
import Roadmap from "./pages/Roadmap";
import PasswordResetPage from "./pages/PassReset";
import PasswordRecoveryPage from "./pages/PassRecovery";
import HomeLayout from "./pages/HomeLayout";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/reset-password",
        element: <PasswordResetPage />,
      },
      {
        path: "/password-recovery",
        element: <PasswordRecoveryPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/roadmap/:type",
        element: <Roadmap />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
