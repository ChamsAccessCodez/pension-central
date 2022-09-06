import React, { useState } from "react";
import { FaEnvelopeOpen, FaLock } from "react-icons/fa";
import ResetPassword from "../forgotPassword/ForgotPassword";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import ClipLoader from "react-spinners/BeatLoader";
import { useDispatch } from "react-redux";
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
import { user } from "../Globals/Reducers";

// loader CSS
const override = {
  // display: "block",
  // margin: "0 auto",
  // borderColor: "red",
  // backgroundColor: "brown",
  width: "inherit",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
};

function SignIn({ toggle }) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("green");

  // toggle state
  const toggleForm = () => {
    setCheck(!check);
  };

  // userSignIn with react-hook-form
  const userSchema = yup.object().shape({
    email: yup.string().required("Email address cannot be empty"),
    secret: yup.string().required("Secret cannot be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const navigate = useNavigate();
  // function for submitting form
  const onSubmit = handleSubmit(async (value) => {
    // console.log(value);
    const { email, secret } = value;
    try {
      const url = "https://sandbox.findfood.ng/api/SubmitSchedules/auth";

      const { data} = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*",
          mode: "cors",
        },
        url: url,
        method: "post",
        data: {
          clientId: email,
          secretKey: secret,
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.responseMessage,
        // title: "Successful",
        text: "Explore your dashboard!!!",
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then(() => {
        dispatch(user(data));
        console.log(data.responseMessage);
        navigate("/dashboard");
      });
      console.log(data);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        // title: "Oops...",
        text: "Wrong email or secreteKey",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timer: 2000,
      }).then(() => {
        navigate("/");
        window.location.reload(false);
      });
      console.log(error);
    }
  });

  return (
    <>
      {loading ? (
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={10}
        />
      ) : (
        <>
          {check ? (
            <ResetPassword toggleForm={toggleForm} />
          ) : (
            <SignUpWrapper>
              <SignUpContent>
                <SignUpHeader>sign in</SignUpHeader>
                <InputWrapper>
                  <FaEnvelopeOpen
                    marginLeft="50px"
                    marginRight="50px"
                    color="#000000"
                  />
                  <Input
                    placeholder="Email"
                    {...register("email", { required: "This is required" })}
                  />
                </InputWrapper>
                <InputWrapper>
                  <FaLock
                    marginLeft="50px"
                    marginRight="50px"
                    color="#000000"
                  />
                  <Input
                    type="password"
                    placeholder="Secret Key"
                    {...register("secret", { required: "This is required" })}
                  />
                </InputWrapper>
                <Button
                  type="submit"
                  onClick={() => {
                    setLoading(!loading);
                    onSubmit();
                  }}
                >
                  <Text>sign in</Text>
                </Button>
                <Switcher>
                  Already have account?
                  <span onClick={toggle}>Sign Up</span>
                </Switcher>
                <Switcher2>
                  Forgot password?
                  <span onClick={toggleForm}>Forgot Password</span>
                </Switcher2>
              </SignUpContent>
            </SignUpWrapper>
          )}
        </>
      )}
    </>
  );
}

export default SignIn;
