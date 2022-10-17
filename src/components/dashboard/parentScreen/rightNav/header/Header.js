import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderWrapper,
  One,
  Two,
  Settings,
  Drop,
  SettingsList,
  PersonContent,
  PersonImage,
} from "./HeaderStyle";
import settingsIcon from "../../../../../images/settingIcon.png";
import { useSelector, useDispatch } from "react-redux";
import personAvatar from "../../../../../images/userAvatar.png";
import decoded from "jwt-decode";
import { signOut } from "../../../../Globals/Reducers";

const Header = () => {
  const [selected, setSelected] = useState("");
  const [showSettings, setShowSettings] = useState("false");

  const settingOptions = ["Change Password", "Logout"];
  const dispatch = useDispatch();
  const user = useSelector((state) => state.persistedReducer.current);

  let decoder;
  if (user) {
    const decode = user.token;
    decoder = decoded(decode);
  }
  // console.log(decoder);

  return (
    <HeaderWrapper>
      <One>
        Welcome <span> {decoder && decoder.nameid} HR</span>
      </One>
      <Two>
        <Settings
          src={settingsIcon}
          alt="settingsIcon"
          onClick={(e) => {
            setShowSettings(!showSettings);
          }}
          // onMouseEnter={(e)=>{
          //   setShowSettings(!showSettings)
          // }}
        />
        {!showSettings && (
          <Drop
          // onMouseLeave={() => {
          //   setShowSettings(false);
          // }}
          >
            {settingOptions.map((option) => (
              <NavLink
                to="/password-reset"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#d0e9fd" : "null",
                    textDecoration: "none",
                  };
                }}
              >
                <SettingsList
                  onClick={() => {
                    setSelected(option);
                    setShowSettings(!showSettings);
                    if (option.startsWith("L")) {
                      dispatch(signOut(user));
                    }
                  }}
                >
                  {option}
                </SettingsList>
              </NavLink>
            ))}
          </Drop>
        )}
        <PersonContent>
          <PersonImage src={personAvatar} alt="personAvatar" />
        </PersonContent>
      </Two>
    </HeaderWrapper>
  );
};

export default Header;
