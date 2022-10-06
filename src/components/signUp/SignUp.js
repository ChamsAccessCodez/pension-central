import React, { useState } from "react";
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
import ClipLoader from "react-spinners/BeatLoader";
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

// loader CSS
const override = {
  width: "inherit",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
};

function SignUp({ toggle }) {
  const [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("green");

  // userSignUp with react-hook-form
  const userSchema = yup.object().shape({
    companyName: yup.string().required("Enter companyName"),
    email: yup.string().required("Enter a valid email address"),
    phone: yup.string().required("Enter a valid phone number"),
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
    const { companyName, email, phone } = value;

    if (errors.companyName || errors.email || errors.phone) {
      setLoading(false);
    } else {
      setLoading(true);
    }

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
        position: "center",
        icon: "success",
        title: "Registration Successful! ",
        text: "Please check your email for your login details.",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        // timer: 1500
      }).then(() => {
        navigate("/");
        window.location.reload(false);
      });
      console.log(data);
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: error.response.data.responseMessage,
        // text: error.response.data.responseMessage,
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then(() => {
        reset();
        navigate("/");
        window.location.reload(false);
      });
    }
    // reset the input
    reset();
  });

  return (
    <SignUpWrapper>
      {loading ? (
        <ClipLoader
          color={"green"}
          loading={loading}
          cssOverride={override}
          size={10}
        />
      ) : (
        <SignUpContent>
          {/* <PensionLogo src={PenLogo} alt="happy girl" /> */}
          <SignUpHeader>sign up</SignUpHeader>
          <p
            style={{
              color: "red",
              fontSize: "10px",
              marginBottom: "2px",
            }}
          >
            {errors.companyName && errors.companyName.message}
          </p>
          <InputWrapper>
            <FaHouseUser marginLeft="50px" marginRight="50px" color="#000000" />
            <Input
              placeholder="Company Name"
              type="text"
              name="companyName"
              {...register("companyName")}
              required
            />
          </InputWrapper>
          <p
            style={{
              color: "red",
              fontSize: "10px",
              marginBottom: "2px",
            }}
          >
            {errors.email && errors.email.message}
          </p>
          <InputWrapper>
            <FaEnvelopeOpen
              marginLeft="50px"
              marginRight="50px"
              color="#000000"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              {...register("email")}
            />
          </InputWrapper>
          <p
            style={{
              color: "red",
              fontSize: "10px",
              marginBottom: "2px",
            }}
          >
            {errors.phone && errors.phone.message}
          </p>
          <InputWrapper>
            <FaPhoneAlt marginLeft="50px" marginRight="50px" color="#000000" />
            <Input
              placeholder="Phone"
              name="phone"
              type="phone"
              {...register("phone")}
              required
            />
          </InputWrapper>
          <Button
            type="submit"
            onClick={() => {
              // setLoading(!loading);
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
      )}
    </SignUpWrapper>
  );
}

export default SignUp;
