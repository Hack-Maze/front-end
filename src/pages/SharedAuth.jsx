import GIF from "../assets/sign.gif";
import { motion } from "framer-motion";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { useParams } from "react-router-dom";

const SharedAuth = () => {
  const { authType } = useParams();
  const isLoginPage = authType === "login";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-screen font-Grotesk overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-screen bg-[#171c29cf] z-10"></div>
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
          <div className="flex mb-4">
            <div>
              <img
                src="/Logo2.png"
                alt="logo"
                className="w-6 sm:w-8 lg:w-10 mr-1 sm:mr-3 lg:mr-5"
              />
            </div>
            <h1 className="sm:text-2xl lg:text-3xl text-white">HackMaze</h1>
          </div>

          {!isLoginPage ? <RegisterPage /> : <LoginPage />}

          <div className="fixed bottom-5 left-0 text-lg text-center w-full text-white">
            &copy; <span>2023 HackMaze</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SharedAuth;
