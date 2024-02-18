import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import "../assets/style.css";

const FormRow = ({ type, name, inputHandler, text, value }) => {
  const isPasswordInput = name === "password";
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-start justify-start my-4 w-auto sm:w-full">
      <label className="mb-1 text-md">{text}</label>
      <div className="relative w-full">
        <input
          type={isPasswordInput && showPassword ? "text" : type}
          name={name}
          placeholder={
            name == "password"
              ? "Your password"
              : name == "email"
              ? "Your email address"
              : "Your name"
          }
          value={value}
          onChange={inputHandler}
          className="bg-[#2E3251] border border-[#585B74] w-full rounded-md h-10 p-4 placeholder:text-gray-600 outline-none"
        />
        {isPasswordInput && (
          <>
            {showPassword ? (
              <AiOutlineEye
                className="absolute right-2 top-2 cursor-pointer text-white"
                size={20}
                onClick={togglePasswordVisibility}
                title="hide password"
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-2 cursor-pointer text-white"
                size={20}
                onClick={togglePasswordVisibility}
                title="show password"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default FormRow;
