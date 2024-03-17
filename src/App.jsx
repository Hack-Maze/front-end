// App.js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import { Toaster } from 'sonner';

import { action as loginAction } from './pages/LoginPage';
import { action as registerAction } from './pages/RegisterPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
        element: (
          <VerificationMiddleware>
            <SharedAuth authType="login" />
          </VerificationMiddleware>
        ),
        action: loginAction,
      },
      {
        path: "/register",
        element: (
          <VerificationMiddleware>
            <SharedAuth authType="register" />
          </VerificationMiddleware>
        ),
        action: registerAction,
      },
      { path: "/reset-password", element: <PasswordResetPage /> },
      { path: "/password-recovery", element: <PasswordRecoveryPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/roadmap/:type", element: <Roadmap /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
  { path: "/verification", element: <CaptchaPage /> },
]);

const App = () => {
  return (<QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <Toaster visibleToasts={1} position='top-right' richColors/>
  </QueryClientProvider>);
};

export default App;
