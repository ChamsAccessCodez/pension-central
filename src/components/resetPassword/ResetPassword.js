import React, { useState } from "react";
import JumpGirl from "../../images/happy-person.png";
import PenLogo from "../../images/pension-central-logo.png";
import PenLogo2 from "../../images/pension-central-logo.png";
// jdjjfjfjfk
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
// import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { FaEnvelopeOpen, FaLock } from "react-icons/fa";
import ClipLoader from "react-spinners/BeatLoader";
// import PenLogo from "../../images/pension-central-logo.png";
import {
  SignUpWrapper,
  SignUpHeader,
  SignUpContent,
  InputWrapper,
  Input,
  Button,
  Text,
  ErrorMessage,
  BoardWrapper,
  BoardContent,
  BrandAdd,
  BrandForm,
  PensionImage,
  PensionLogo,
  Square,
  PensionLogo2,
} from "./ResetPasswordStyle.js";

// loader CSS
const override = {
  width: "inherit",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
};

function ResetPassword() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("green");

  // userSignUp with react-hook-form
  const userSchema = yup.object().shape({
    currentPassword: yup.string().required("Current Password cannot be empty"),
    newPassword: yup.string().required("New Password cannot be empty"),
    email: yup.string().required("Email address cannot be empty"),
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
    const { currentPassword, newPassword, email } = value;
    try {
      const url = "https://sandbox.findfood.ng/api/Partners/changepassword";

      const { data } = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*",
          mode: "cors",
          // token: data.token,
        },
        url: url,
        method: "post",
        data: {
          currentPassword,
          newPassword,
          clientId: email,
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Password Changed Successfully",
        text: "Login to your dashboard now!",
        showConfirmButton: true,
        // text: data.responseMessage,
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then(() => {
        navigate("/");
        window.location.reload(false);
      });
      console.log(data);
      console.log(data.responseMessage);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Your current password or email is wrong",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then(() => {
        navigate("/");
        window.location.reload(false);
      });
      console.log(error);
    }
  });

  return (
    <BoardWrapper>
      <BoardContent>
        <BrandAdd>
          <PensionLogo src={PenLogo} alt="happy girl" />
          <Square></Square>
          <PensionImage src={JumpGirl} alt="happy girl" />
        </BrandAdd>
        <BrandForm>
          <PensionLogo2 src={PenLogo2} alt="happy girl" />
          <SignUpWrapper>
            {loading ? (
              <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={10}
              />
            ) : (
              <SignUpContent>
                <SignUpHeader>reset password</SignUpHeader>
                <ErrorMessage
                  errors={errors}
                  name="currentPassword"
                  message="Current password is required."
                />
                <InputWrapper>
                  <FaLock
                    marginLeft="50px"
                    marginRight="50px"
                    color="#000000"
                  />
                  <Input
                    placeholder="Current Password"
                    type="password"
                    {...register("currentPassword", {
                      required: "This is a required field",
                    })}
                  />
                </InputWrapper>
                <ErrorMessage
                  errors={errors}
                  name="newPassword"
                  message="New password is required."
                />
                <InputWrapper>
                  <FaLock
                    marginLeft="50px"
                    marginRight="50px"
                    color="#000000"
                  />
                  <Input
                    placeholder="New Password"
                    type="password"
                    {...register("newPassword", {
                      required: "This is a required field",
                    })}
                  />
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
                <Button
                  type="submit"
                  onClick={() => {
                    setLoading(!loading);
                    onSubmit();
                  }}
                >
                  <Text>send</Text>
                </Button>
              </SignUpContent>
            )}
          </SignUpWrapper>
        </BrandForm>
      </BoardContent>
    </BoardWrapper>
  );
}

export default ResetPassword;
