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
      <div className="relative">
        <input
          type={isPasswordInput && showPassword ? "text" : type}
          placeholder={text}
          autoComplete={name}
          value={value}
          onChange={inputHandler}
          className="appearance-none bg-transparent block w-full mb-6 px-3 pb-2  border-b-[1px] border-white placeholder-white focus:outline-none focus:border-b-2 text-sm sm:text-lg text-white transition border-transition duration-500 focus:border-opacity-100 border-opacity-50"
        />
        {(name === "password" || name === "confirmPassword") && (
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
