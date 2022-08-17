import React from "react";
import { FaEnvelopeOpen} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
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
  // resetPassword with react-hook-form
  const resetSchema = yup.object().shape({
    email: yup.string().required("Email address cannot be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(resetSchema),
  });

  const navigate = useNavigate();
  // function for submitting reset form
  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { email } = value;
    try {
      const url = "https://sandbox.findfood.ng/api/Partners/forgottenpassword";

      const { data } = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*",
          mode: "cors",
        },
        url: url,
        method: "post",
        data: {
          clientId: email,
        },
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Password Changed Successful",
        text: "Check your email to get your new password",
        showConfirmButton: true,
      }).then(() => {
        navigate("/");
        window.location.reload(false);
      });
      console.log(data.data);
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: error.response.data.responseMessage,
      }).then(() => {
        navigate("/");
        window.location.reload(false);
      });
    }
  });
  return (
    <SignUpWrapper>
      <SignUpContent>
        <SignUpHeader>reset password</SignUpHeader>
        <InputWrapper>
          <FaEnvelopeOpen
            marginLeft="50px"
            marginRight="50px"
            color="#000000"
          />
          <Input placeholder="Email" {...register("email")} />
        </InputWrapper>
        <Button
          type="submit"
          onClick={() => {
            onSubmit();
          }}
        >
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
