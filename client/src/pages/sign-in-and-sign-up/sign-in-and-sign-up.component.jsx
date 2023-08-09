import React from "react";
import { motion } from "framer-motion";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
  >
    <div className="flex w-[900px] justify-between my-[30px] mx-auto">
      <SignIn />
      <SignUp />
    </div>
  </motion.div>
);

export default SignInAndSignUpPage;
