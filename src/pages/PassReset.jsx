import React, { useState } from "react";
import FormRow from "../components/FormRow";
import customFetch from "../../utils/CustomFetsh";
import { Form, redirect, useParams } from "react-router-dom";
import SubmitBtn from "@/components/SubmitBtn";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const action = async ({ request }) => {
  const {token} = useParams();
  console.log(token);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.token = token;
  console.log(data);
  try {
    await customFetch.post(`reset-password`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success('Password changed');
    return redirect('/login');
  } catch (error) {
    toast.error(error.response.data.detail.toString());
    return error;
  }
}

const PasswordResetPage = () => {
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
              Reset Your Password
            </h2>
          <Form method="post">
            <FormRow
              text="Password"
              name="new_password"
              type="password"
            />
            <SubmitBtn text={'Reset password'} />
          </Form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PasswordResetPage;
