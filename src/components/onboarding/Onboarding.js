import React, { useState } from "react";
import JumpGirl from "../../images/happy-person.png";
import PenLogo from "../../images/pension-central-logo.png";
import SignUp from "../signUp/SignUp";
import SignIn from "../signIn/SignIn";
import PenLogo2 from "../../images/pension-central-logo.png";
import {
  BoardWrapper,
  BoardContent,
  BrandAdd,
  BrandForm,
  PensionImage,
  PensionLogo,
  Square,
  PensionLogo2,
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
          <PensionLogo2 src={PenLogo2} alt="happy girl" />
          {hasAccount ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
        </BrandForm>
      </BoardContent>
    </BoardWrapper>
  );
}

export default Onboarding;
