// App.js
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/Error/404";
import Roadmap from "./pages/Roadmap";
import PasswordResetPage from "./pages/PassReset";
import PasswordRecoveryPage from "./pages/PassRecovery";
import HomeLayout from "./pages/HomeLayout";
import SharedAuth from "./pages/SharedAuth";
import CaptchaPage from "./pages/CapthchaPage";
import VerificationMiddleware from "./components/Verification/VerificationMiddleware";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <VerificationMiddleware>
            <LandingPage />
          </VerificationMiddleware>
        ),
      },
      {
        path: "/:authType",
        element: (
          <VerificationMiddleware>
            <SharedAuth />
          </VerificationMiddleware>
        ),
      },
      { path: "/reset-password", element: <PasswordResetPage /> },
      { path: "/password-recovery", element: <PasswordRecoveryPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/roadmap/:type", element: <Roadmap /> },
    ],
  },
  { path: "/verification", element: <CaptchaPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
