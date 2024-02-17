import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import { AiOutlineGoogle } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import customFetch from "../../utils/CustomFetsh";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      console.error("Password should be at least 6 characters long.");
      return;
    }

    try {
      const response = await customFetch.post(`users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          full_name: username,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/dashboard");
      } else {
        console.error("Registration failed:", data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-center text-white my-auto"
      >
        <h1 className="mb-4 text-center sm:text-3xl lg:text-4xl">Welcome !</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="sm:mx-auto sm:w-[70%] lg:w-[30%] bg-[#1a1f2ce2] rounded-md flex flex-col p-5 shadow-box"
        >
          <div className="flex flex-row items-start justify-between w-full">
            <div className="bg-gray-300 h-[5px] rounded-sm w-[5px]"></div>
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <img src="/Logo2.png" alt="logo" className="h-11 w-12" />
              <h2 className="text-center text-white text-xl w-auto">
                Register to Hack Maze
              </h2>
            </div>
            <div className="bg-gray-300 h-[5px] rounded-sm w-[5px]"></div>
          </div>
          <div>
            <Form onSubmit={submitHandler}>
              <FormRow
                text="Username"
                name="username"
                type="text"
                value={username}
                inputHandler={(e) => setUsername(e.target.value)}
              />

              <FormRow
                text="Email"
                name="email"
                type="email"
                value={email}
                inputHandler={(e) => setEmail(e.target.value)}
              />
              <FormRow
                text="Password"
                name="password"
                type="password"
                value={password}
                inputHandler={(e) => setPassword(e.target.value)}
              />

              <div className="w-full text-center mt-6">
                <button
                  type="submit"
                  className="cursor-pointer font-bold text-center border py-2 w-[50%] rounded-md border-[#585B74] text-gray-400 hover:bg-gray-500 hover:text-white"
                >
                  Continue
                </button>
              </div>
              <div className="flex items-center my-4 w-[80%] mx-auto">
                <hr className="flex-grow border-gray-500" />
                <div className="mx-4 text-gray-500 text-lg uppercase">or</div>
                <hr className="flex-grow border-gray-500" />
              </div>
              <div className="flex flex-col mx-auto w-full">
                <a
                  href="YOUR_GOOGLE_OAUTH_ENDPOINT"
                  className="mb-4 py-1 rounded-md flex items-center justify-center border border-[#585B74] text-gray-400 hover:bg-gray-500 hover:text-white"
                >
                  <AiOutlineGoogle size={32} className="pr-2" /> Continue With
                  Google
                </a>
                <a
                  href="YOUR_GITHUB_OAUTH_ENDPOINT"
                  className="mb-4 py-1 rounded-md flex items-center justify-center border border-[#585B74] text-gray-400 hover:bg-gray-500 hover:text-white"
                >
                  <FiGithub size={32} className="pr-2" /> Continue With Google
                </a>
              </div>
              <div className="flex flex-row items-baseline justify-between w-full mt-4">
                <div className="bg-gray-300 h-[5px] rounded-sm w-[5px]"></div>

                <p className="text-center text-gray-300 text-lg w-auto">
                  Already Have An Account?{" "}
                  <Link to={"/login"} className="text-[#D5FFC1]">
                    Login
                  </Link>
                </p>
                <div className="bg-gray-300 h-[5px] rounded-sm w-[5px]"></div>
              </div>
            </Form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default RegisterPage;
