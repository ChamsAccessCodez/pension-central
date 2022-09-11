import React, { useState } from "react";
import iconBack from "../../../images/IconBack.png";
import iconFront from "../../../images/IconFront.png";
import LeftNav from "../parentScreen/leftNav/LeftNav";
// import RightNav from "../parentScreen/rightNav/RightNav";
import Header from "../parentScreen/rightNav/header/Header";
import Card from "./rightNav/content/Card";
import Normal from "./rightNav/content/normal/Normal";
import ResetPassword from "../../../components/resetPassword/ResetPassword";
import { useSelector } from "react-redux";
import {
  Wrapper,
  ParentNav,
  ParentContent,
  IconBack,
  RightNavWrapper,
} from "./ParentScreenStyle";

const ParentScreen = () => {
  const user = useSelector((state) => state.persistedReducer.current);
  const [toggle, setToggle] = useState(false);
  const toggleMe = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {user && user.changePassword ? (
        <ResetPassword />
      ) : (
        <Wrapper>
          {toggle ? (
            <ParentNav>
              <LeftNav toggle={toggle} />
              <IconBack
                src={iconFront}
                alt="Icon front"
                onClick={() => {
                  toggleMe();
                }}
              />
            </ParentNav>
          ) : (
            <ParentNav wt>
              <LeftNav toggle={toggle} />
              <IconBack
                src={iconBack}
                alt="Icon back"
                onClick={() => {
                  toggleMe();
                }}
              />
            </ParentNav>
          )}
          <ParentContent>
            <RightNavWrapper>
              <Header />
              <Card />
              <Normal />
            </RightNavWrapper>
          </ParentContent>
        </Wrapper>
      )}
    </>
  );
};

export default ParentScreen;
