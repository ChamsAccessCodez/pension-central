import React, { useState } from "react";
import JumpGirl from "../../images/happy-person.png";
import PenLogo from "../../images/pension-central-logo.png";
import SignUp from "../signUp/SignUp";
import SignIn from "../signIn/SignIn";
import {
  BoardWrapper,
  BoardContent,
  BrandAdd,
  BrandForm,
  PensionImage,
  PensionLogo,
  Square,
} from "./OnboardingStyle";

function Onboarding() {
  const [hasAccount, setHasAccount] = useState(false);

  // toggle form
  const toggle = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <BoardWrapper>
      <BoardContent>
        <BrandAdd>
          <PensionLogo src={PenLogo} alt="happy girl" />
          <Square></Square>
          <PensionImage src={JumpGirl} alt="happy girl" />
        </BrandAdd>
        <BrandForm>
          {hasAccount ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
        </BrandForm>
      </BoardContent>
    </BoardWrapper>
  );
}

export default Onboarding;
