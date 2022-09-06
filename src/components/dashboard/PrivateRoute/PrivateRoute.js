import React from "react";
import { useSelector } from "react-redux";
import decoded from "jwt-decode";
import Onboarding from "../../onboarding/Onboarding";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.persistedReducer.current);

  if (user) {
    var token = user && user.token;
    var decode = decoded(token);

    return <div>{decode.nameid ? children : <Onboarding />}</div>;
  } else if (user === null) {
    return <Onboarding />;
  }
};

export default PrivateRoute;
