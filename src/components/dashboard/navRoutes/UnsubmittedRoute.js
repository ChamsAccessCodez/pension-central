import React, { useState } from "react";
import iconBack from "../../../images/IconBack.png";
import iconFront from "../../../images/IconFront.png";
import LeftNav from "../parentScreen/leftNav/LeftNav";
// import RightNav from "../parentScreen/rightNav/RightNav";
import Header from "../parentScreen/rightNav/header/Header";
import Card from "../parentScreen/rightNav/content/Card";
import Unsubmitted from "../parentScreen/rightNav/content/unsubmittedSchedule/UnsubmittedSchedule";

import {
  UploadWrapper,
  // shsjsjk
  Wrapper,
  ParentNav,
  ParentContent,
  IconBack,
  RightNavWrapper,
} from "./UploadRouteStyle";

const UnsubmittedRoute = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMe = () => {
    setToggle(!toggle);
  };
  return (
    <UploadWrapper>
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
            <Card unsubmitWord />
            <Unsubmitted />
          </RightNavWrapper>
        </ParentContent>
      </Wrapper>
    </UploadWrapper>
  );
};

export default UnsubmittedRoute;
