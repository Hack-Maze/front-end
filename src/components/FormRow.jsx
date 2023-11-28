import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const FormRow = ({ type, name, inputHandler, text, value }) => {
  const isPasswordInput = name === "password";
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 mb-1"
      >
        {text}
      </label>

      <div className="relative">
        <input
          type={isPasswordInput && showPassword ? "text" : type}
          name={name}
          autoComplete={name}
          value={value}
          onChange={inputHandler}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {(name === "password" || name === "confirmPassword") && (
          <>
            {showPassword ? (
              <AiOutlineEye
                className="absolute right-2 top-2 cursor-pointer"
                size={20}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-2 cursor-pointer"
                size={20}
                onClick={togglePasswordVisibility}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default FormRow;
