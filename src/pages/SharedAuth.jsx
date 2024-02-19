import GIF from "../assets/sign.gif";
import { motion } from "framer-motion";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { Link, useParams } from "react-router-dom";

const SharedAuth = () => {
  const { authType } = useParams();
  const isLoginPage = authType === "login";

  return (
    <div className="flex flex-col h-screen font-Grotesk overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-screen z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15, 32, 24, 0.99),rgb(10, 18, 26))",
        }}
      ></div>
      <div
        className=" flex-grow relative"
        style={{
          backgroundImage: `url(${GIF})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative z-30 py-4 sm:px-6 lg:px-8"
        >
          <Link to={"/"} className="flex items-center mb-4 w-fit">
            <div>
              <img
                src="/Logo2.png"
                alt="logo"
                className="w-5 sm:w-6 lg:w-8 mr-1 sm:mr-3 lg:mr-5"
              />
            </div>
            <h1 className="sm:text-lg lg:text-2xl text-white">HackMaze</h1>
          </Link>

          {!isLoginPage ? <RegisterPage /> : <LoginPage />}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-16 md:bottom-10 left-0 md:text-lg text-sm text-center w-full text-white"
          >
            &copy; <span>2023 HackMaze</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SharedAuth;
