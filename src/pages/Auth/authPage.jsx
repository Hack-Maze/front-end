import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormRow from "../../components/FormRow";
import NET from "vanta/dist/vanta.net.min";
import { AiOutlineGoogle } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const Auth = () => {
  const [isLoginFormVisible, setLoginFormVisibility] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const netEffect = NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 0.5,
      scaleMobile: 1.0,
      color: 0x4e4e4e,
      backgroundColor: 0xa060f,
      points: 15.0,
      maxDistance: 20.0,
    });
    return () => {
      if (netEffect) netEffect.destroy();
    };
  }, []);

  const handleToggleLoginSignup = () => {
    setLoginFormVisibility(!isLoginFormVisible);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen  bg-cover bg-center py-4 sm:px-6 lg:px-8 font-Incon"
      id="vanta"
    >
      <div className="flex mb-4">
        <div>
          <img src="/logo.png" alt="logo" className="w-10 mr-8" />
        </div>
        <h1 className="text-3xl text-white ">HackMaze</h1>
      </div>
      <div className=" flex justify-center items-center h-[80vh]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex text-white text-xl uppercase font-bold w-full mb-8 cursor-pointer">
            <h2
              className={`text-center w-[50%] border-b-2 ${
                isLoginFormVisible ? "border-red-600" : "border-gray-200"
              } pb-2`}
              onClick={handleToggleLoginSignup}
            >
              Sign In
            </h2>
            <h2
              className={`text-center w-[50%] border-b-2 ${
                isLoginFormVisible ? "border-gray-200" : "border-red-600"
              } pb-2`}
              onClick={handleToggleLoginSignup}
            >
              Register
            </h2>
          </div>
          <div className="flex justify-center mb-5">
            <AiOutlineGoogle
              size={30}
              className="text-white mr-8 cursor-pointer hover:text-gray-200"
              title={
                isLoginFormVisible ? "Login with google" : "Sign up with google"
              }
            />
            <FiGithub
              size={30}
              className="text-white cursor-pointer hover:text-gray-200"
              title={
                isLoginFormVisible ? "Login with github" : "Sign up with github"
              }
            />
          </div>
          <div>
            <form onSubmit={submitHandler}>
              {!isLoginFormVisible && (
                <FormRow
                  text="Username"
                  name="username"
                  type="text"
                  value={username}
                  inputHandler={(e) => setUsername(e.target.value)}
                />
              )}
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
              {!isLoginFormVisible && (
                <FormRow
                  text="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  inputHandler={(e) => setConfirmPassword(e.target.value)}
                />
              )}

              {isLoginFormVisible && (
                <div className="text-sm">
                  <a
                    href=".forgot-password"
                    className="text-white text-md hover:text-gray-200"
                  >
                    Forgot Password?
                  </a>
                </div>
              )}
              <div className="w-full text-center mt-8">
                <button
                  type="submit"
                  className="text-white font-medium text-2xl border-b-2 border-white hover:text-gray-200"
                >
                  {isLoginFormVisible ? "Login" : "Sign up"}
                </button>
              </div>
              {/* <div className="flex items-center">
              <hr className="flex-grow border-gray-300" />
              <div className="mx-4 text-gray-500">or</div>
              <hr className="flex-grow border-gray-300" />
            </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
