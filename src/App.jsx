// App.js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/Error/404";
import Roadmap from "./pages/Roadmap";
import Layout from "./pages/Layout";
import SharedAuth from "./pages/SharedAuth";
import CaptchaPage from "./pages/CapthchaPage";
import VerificationMiddleware from "./components/Verification/VerificationMiddleware";
import { Toaster } from 'sonner';
import { action as loginAction } from './pages/LoginPage';
import { action as registerAction } from './pages/RegisterPage';
import { action as resetAction } from './pages/PassReset';
import { action as recoveryAction } from './pages/PassRecovery';
import { loader as homeLoader } from './pages/Home';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Dashboard from './pages/Dashboard';

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
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: (
          <VerificationMiddleware>
            <SharedAuth authType="login" />
          </VerificationMiddleware>
        ),
        action: loginAction,
      },
      {
        path: "register",
        element: (
          <VerificationMiddleware>
            <SharedAuth authType="register" />
          </VerificationMiddleware>
        ),
        action: registerAction,
      },
      { path: "password-recovery", element: <SharedAuth authType="recover" />, action: recoveryAction },
      { path: "reset-password/:token", element: <SharedAuth authType="reset" />, action: resetAction },
      {
        element: <Home />,
        loader: homeLoader,
        children: [
          { path: '/dashboard', index: true, element: <Dashboard /> },
          { path: '/learn', element: <Learn /> },
        ]
      },
      // { path: "/roadmap/:type", element: <Roadmap /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
  { path: "/verification", element: <CaptchaPage /> },
]);


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster visibleToasts={1} position='top-right' richColors />
    </QueryClientProvider>
  );
};

export default App;
