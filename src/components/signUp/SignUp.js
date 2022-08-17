import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
// import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
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
  ErrorMessage,
} from "./SignUpStyle";

function SignUp({ toggle }) {
  // userSignUp with react-hook-form
  const userSchema = yup.object().shape({
    companyName: yup.string().required("Company name cannot be empty"),
    email: yup.string().required("Email address cannot be empty"),
    phone: yup.string().required("Phone cannot be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  // } = useForm();
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const navigate = useNavigate();
  // function for submitting form
  const onSubmit = handleSubmit(async (value) => {
    // console.log(value);

    const { companyName, email, phone } = value;

    try {
      const url = "https://sandbox.findfood.ng/api/Partners/signup";

      const { data } = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*",
          mode: "cors",
        },
        url: url,
        method: "post",
        data: {
          companyName: companyName,
          email: email,
          phone: phone,
        },
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title:
          "Registration Successful! ",
        text: "Please check your email for your login details.",
        showConfirmButton: true,
        // timer: 1500
      }).then(() => {
        navigate("/");
        window.location.reload(false)
      });
      console.log(data.data);
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: error.response.data.responseMessage,
        // text: error.response.data.responseMessage,
      }).then(()=>{
        navigate("/")
        window.location.reload(false)
      });
    }
  });

  return (
    <SignUpWrapper>
      <SignUpContent>
        <SignUpHeader>sign up</SignUpHeader>
        <ErrorMessage errors={errors} name="companyName" message="Company name is required." /> 
        <InputWrapper>
          <FaHouseUser 
          marginLeft="50px" 
          marginRight="50px" 
          color="#000000" />
          <Input placeholder="Company Name" {...register("companyName", {required: 'This is a required field'})} />
        </InputWrapper>
        {/* <ErrorMessage>{errors.email.message}</ErrorMessage> */}
        <InputWrapper>
          <FaEnvelopeOpen
            marginLeft="50px"
            marginRight="50px"
            color="#000000"
          />
          <Input placeholder="Email" {...register("email")} />
        </InputWrapper>
        {/* <ErrorMessage>{errors.phone.message}</ErrorMessage> */}
        <InputWrapper>
          <FaPhoneAlt 
          marginLeft="50px" 
          marginRight="50px" 
          color="#000000" />
          <Input placeholder="Phone" {...register("phone")} />
        </InputWrapper>
        <Button
          type="submit"
          onClick={() => {
            console.log("cynthia");
            onSubmit();
          }}
        >
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
