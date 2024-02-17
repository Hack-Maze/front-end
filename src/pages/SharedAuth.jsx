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
      className="flex flex-col min-h-screen font-Roboto overflow-hidden"
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
                src="/Logo1.png"
                alt="logo"
                className="w-6 sm:w-8 lg:w-10 mr-1 sm:mr-3 lg:mr-5"
              />
            </div>
            <h1 className="sm:text-2xl lg:text-3xl text-white">HackMaze</h1>
          </div>
          {!isLoginPage ? <RegisterPage /> : <LoginPage />}
          <div className="fixed bottom-0 left-4 w-full text-white py-2">
            &copy; <span>2023 HackMaze</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SharedAuth;
