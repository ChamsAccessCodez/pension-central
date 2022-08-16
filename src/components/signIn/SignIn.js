import React, {useState} from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import ResetPassword from "../resetPassword/ResetPassword"
import {
  SignUpWrapper,
  SignUpHeader,
  SignUpContent,
  InputWrapper,
  Input,
  Button,
  Text,
  Switcher,
  Switcher2,
} from "./SignInStyle";

function SignIn({ toggle, toggleReset }) {
  const [check, setCheck] = useState(false)

  // toggle state
  const toggleForm = () =>{
    setCheck(!check)
  }

  return (
    <>
    { check ?
      <ResetPassword toggleForm={toggleForm} />
       : (
      <SignUpWrapper>
      <SignUpContent>
        <SignUpHeader>sign in</SignUpHeader>
        <InputWrapper>
          <FaEnvelopeOpen
            marginLeft="50px"
            marginRight="50px"
            color="#000000"
          />
          <Input placeholder="Email" />
        </InputWrapper>
        <InputWrapper>
          <FaPhoneAlt marginLeft="50px" marginRight="50px" color="#000000" />
          <Input placeholder="Phone" />
        </InputWrapper>
        <Button>
          <Text>sign in</Text>
        </Button>
        <Switcher>
          Already have account?
          <span onClick={toggle}>Sign Up</span>
        </Switcher>
        <Switcher2>
          Forgot password?
          <span onClick={toggleForm}>Reset Password</span>
        </Switcher2>
      </SignUpContent>
    </SignUpWrapper>
    )}
    </>
  );
}

export default SignIn;
