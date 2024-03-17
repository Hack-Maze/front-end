import React from "react";
import FormRow from "../components/FormRow";
import customFetch from "../../utils/CustomFetsh";
import SubmitBtn from "@/components/SubmitBtn";
import { Form } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(`password-recovery/${data.email}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success('Email sent. Please check your email');
    return redirect('/login');
  } catch (error) {
    toast.error(error.response.data.detail.toString());
    return error;
  }
}

const PasswordRecoveryPage = () => {
  return (
    <div className="h-[80vh]">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.7 }}
      className="flex flex-col items-center justify-center text-white h-full my-auto"
    >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mx-auto w-full md:w-[50%] xl:w-[30%] bg-[#ffffff0b] rounded-md flex flex-col p-5 shadow-box border border-gray-700"
        >
            <h2 className="text-center text-white text-xl md:text-3xl w-auto uppercase"
            >
              Recover Your Password
            </h2>
            <Form method="post">
              <FormRow
                text="Email"
                name="email"
                type="email"
              />
              <SubmitBtn text={'Send email'}/>
            </Form>
          </motion.div>
        </motion.div>
      </div>
  );
};

export default PasswordRecoveryPage;
