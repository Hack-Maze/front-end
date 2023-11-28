import { useState, useEffect } from "react";
import FormRow from "../../components/FormRow";
import NET from "vanta/dist/vanta.net.min";
const Auth = () => {
  const [isLoginFormVisible, setLoginFormVisibility] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 0.5,
      scaleMobile: 1.0,
      color: 0x19ed67,
      backgroundColor: 0x162b21,
      points: 11.0,
      maxDistance: 20.0,
    });
  }, []);

  const handleToggleLoginSignup = () => {
    setLoginFormVisibility(!isLoginFormVisible);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center py-8 sm:px-6 lg:px-8"
      id="vanta"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white bg-opacity-50 backdrop-blur-sm p-4 shadow transition-shadow hover:shadow-md sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mb-5 text-center text-3xl font-extrabold text-gray-900">
              {isLoginFormVisible
                ? "Login to your account"
                : "Create a new account"}
            </h2>
          </div>
          <form onSubmit={handleFormSubmit} className="space-y-5">
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
              <div className={`flex items-center justify-between`}>
                <div className={`flex items-center`}>
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href=".forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}
            <div>
              <button
                type="submit"
                className="w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                {isLoginFormVisible ? "Login" : "Sign up"}
              </button>
            </div>
            {/* <div className="flex items-center">
              <hr className="flex-grow border-gray-300" />
              <div className="mx-4 text-gray-500">or</div>
              <hr className="flex-grow border-gray-300" />
            </div> */}
            <div
              className={`flex items-center justify-center w-full mt-4 font-medium`}
            >
              <h4>
                {isLoginFormVisible
                  ? "Not have an account? "
                  : "Already have an account! "}
              </h4>
              <button
                className="ml-1 text-blue-500 hover:text-blue-400"
                onClick={handleToggleLoginSignup}
              >
                {isLoginFormVisible ? "Join Now" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
