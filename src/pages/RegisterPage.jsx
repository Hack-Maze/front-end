import { Form, Link, redirect } from "react-router-dom";
import FormRow from "../components/FormRow";
import { AiOutlineGoogle } from "react-icons/ai";
import { PiGithubLogoFill } from "react-icons/pi";
import customFetch from "../../utils/CustomFetsh";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SubmitBtn from "@/components/SubmitBtn";




export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const password = data.password;
  if (password.length < 6) {
    toast.error("Password should be at least 6 characters long.");
    return;
  }

  try {
    await customFetch.post(`signup`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast.success('Registeration success.')
    return redirect("/login");

  } catch (error) {
    toast.error(error.response.data.detail.toString());
    return error;
  }
};

const RegisterPage = () => {
  return (
    <div className="h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="flex flex-col items-center justify-center text-white h-full"
      >
        <h1 className="mb-9 text-center md:text-5xl text-3xl">Welcome !</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="sm:mx-auto w-full md:w-[50%] xl:w-[30%] bg-[#ffffff0b] rounded-md flex flex-col p-5 shadow-box border border-gray-700"
        >
          <div className="flex flex-row items-start justify-between w-full">
            <div className="bg-gray-300 h-[5px] rounded-sm w-[5px]"></div>
            <div>
              <h2 className="text-center text-white text-xl md:text-3xl w-auto uppercase">
                Register
              </h2>
            </div>
            <div className="bg-gray-300 h-[5px] rounded-sm w-[5px]"></div>
          </div>
          <div>
            <Form method="post">
              <FormRow
                text="Username"
                name="full_name"
                type="text"
              />

              <FormRow
                text="Email"
                name="email"
                type="email"
              />
              <FormRow
                text="Password"
                name="password"
                type="password"
              />

              <SubmitBtn text={'Continue'}/>
              <div className="flex items-center my-4 w-[80%] mx-auto">
                <hr className="flex-grow border-gray-500" />
                <div className="mx-4 text-gray-500 text-lg uppercase">or</div>
                <hr className="flex-grow border-gray-500" />
              </div>
              <div className="flex justify-center items-baseline flex-row w-full text-gray-500">
                <a
                  href="YOUR_GOOGLE_OAUTH_ENDPOINT"
                  className="mr-4 rounded-md flex items-center justify-center hover:text-white"
                >
                  <AiOutlineGoogle size={40} />
                </a>
                <a
                  href="YOUR_GITHUB_OAUTH_ENDPOINT"
                  className="mb-4 py-1 rounded-md flex items-center justify-center hover:text-white"
                >
                  <PiGithubLogoFill size={40} />
                </a>
              </div>
              <div className="flex flex-row items-baseline justify-between w-full mt-2">
                <div className="bg-gray-300 h-[5px] rounded-sm w-[5px]"></div>

                <p className="text-center text-gray-300 text-base md:text-lg w-auto">
                  Alredy Have An Account?{" "}
                  <Link
                    to={"/login"}
                    className="text-[#5EE848] hover:text-[#d5ffc19a]"
                  >
                    Login
                  </Link>
                </p>
                <div className="bg-gray-300 h-[5px] rounded-sm w-[5px]"></div>
              </div>
            </Form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
