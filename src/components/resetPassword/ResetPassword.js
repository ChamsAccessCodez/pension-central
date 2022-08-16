import React from "react";
import { FaEnvelopeOpen, FaLock } from "react-icons/fa";
import {
  SignUpWrapper,
  SignUpHeader,
  SignUpContent,
  InputWrapper,
  Input,
  Button,
  Text,
  Switcher,
} from "./ResetPasswordStyle";

function ResetPassword({ toggleForm }) {
  return (
    <SignUpWrapper>
      <SignUpContent>
        <SignUpHeader>reset password</SignUpHeader>
        <InputWrapper>
          <FaLock 
          marginLeft="50px" 
          marginRight="50px" 
          color="#000000" />
          <Input placeholder="Current Password" />
        </InputWrapper>
        <InputWrapper>
          <FaLock
            marginLeft="50px"
            marginRight="50px"
            color="#000000"
          />
          <Input placeholder="New Password" />
        </InputWrapper>
        <InputWrapper>
          <FaEnvelopeOpen 
          marginLeft="50px" 
          marginRight="50px" 
          color="#000000" />
          <Input placeholder="Email" />
        </InputWrapper>
        <Button>
          <Text>Reset Password</Text>
        </Button>
        <Switcher>
          Already have an account?
          <span onClick={toggleForm}>Sign In</span>
        </Switcher>
      </SignUpContent>
    </SignUpWrapper>
  );
}

export default ResetPassword;
