import React from "react";
import CompanyName from "../../images/company-name-icon.png";
import { FaHouseUser } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import {
  SignUpWrapper,
  SignUpHeader,
  SignUpContent,
  InputWrapper,
  Input,
  Button,
  Text,
  Switcher,
} from "./SignUpStyle";

function SignUp({ toggle }) {
  return (
    <SignUpWrapper>
      <SignUpContent>
        <SignUpHeader>sign up</SignUpHeader>
        <InputWrapper>
          <FaHouseUser marginLeft="50px" marginRight="50px" color="#000000" />
          <Input placeholder="Company Name" />
        </InputWrapper>
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
          <Input placeholder="Company Name" />
        </InputWrapper>
        <Button>
          <Text>sign up</Text>
        </Button>
        <Switcher>
          Already have account?
          <span onClick={toggle}>Sign In</span>
        </Switcher>
      </SignUpContent>
    </SignUpWrapper>
  );
}

export default SignUp;
