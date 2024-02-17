import React, { useState } from "react";
import FormRow from "../components/FormRow";
import VantaBackground from "../components/VantaBackground/VantaBackground";
import customFetch from "../../utils/CustomFetsh";

const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await customFetch.post(`password-recovery/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <VantaBackground>
      <div className="text-white py-4 sm:px-6 lg:px-8">
        <div className="flex mb-4">
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="w-7 sm:w-8 lg:w-12 mr-3 sm:mr-5 lg:mr-8"
            />
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-white">
            HackMaze
          </h1>
        </div>
        <div className="flex justify-center items-center sm:h-[50vh] lg:h-[60vh]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
              className={
                "text-center mx-auto w-[70%] border-b-2 border-red-600 pb-2 text-white text-base sm:text-lg lg:text-xl uppercase font-bold mb-8"
              }
            >
              Recover Your Password
            </h2>
            <form onSubmit={handlePasswordReset}>
              <FormRow
                text="Email"
                name="email"
                type="email"
                value={email}
                inputHandler={(e) => setEmail(e.target.value)}
              />
              <div className="w-full text-center mt-8">
                <button
                  type="submit"
                  className="text-white font-medium text-lg border-b-2 border-white hover:text-gray-200"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </div>
    </VantaBackground>
  );
};

export default PasswordRecoveryPage;
