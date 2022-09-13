import React from "react";
import {
  NavWrapper,
  PcLogo,
  ButtonWrapper,
  ControlButton,
  ControlButton2,
  DashIcon,
  ActionText,
} from "./LeftNavStyle";
import pcLogo from "../../../../images/pension-central-logo.png";
import pcLogo2 from "../../../../images/pension-central-logo2.png";
import dashIcon from "../../../../images/home.png";
import uploadScheduleIcon from "../../../../images/uploadScheduleIcon.png";
import unsubmittedScheduleIcon from "../../../../images/unsubmittedScheduleIcon.png";
import submittedScheduleIcon from "../../../../images/submittedScheduleIcon.png";
import reports from "../../../../images/reports.png";
import settingsIcon from "../../../../images/settingIcon.png";
import { NavLink } from "react-router-dom";

const LeftNav = ({ toggle }) => {
  return (
    <NavWrapper>
      {toggle ? (
        <>
          <PcLogo src={pcLogo2} alt="PcLogo" />
          <ButtonWrapper>
          <NavLink
              to="/dashboard"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
            <ControlButton jc>
              <DashIcon src={dashIcon} alt="DashIcon" />
            </ControlButton>
            </NavLink>
            <NavLink
              to="/upload-schedules"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
            <ControlButton2 jc>
              <DashIcon src={uploadScheduleIcon} alt="uploadScheduleIcon" />
            </ControlButton2>
            </NavLink>
            <NavLink
              to="/unsubmitted-schedules"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
            <ControlButton2 jc>
              <DashIcon
                src={unsubmittedScheduleIcon}
                alt="unsubmittedScheduleIcon"
              />
            </ControlButton2>
            </NavLink>
            <NavLink
              to="/submitted-schedules"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
            <ControlButton2 jc>
              <DashIcon
                src={submittedScheduleIcon}
                alt="submittedScheduleIcon"
              />
            </ControlButton2>
            </NavLink>
            <NavLink
              to="/reports"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
            <ControlButton2 jc>
              <DashIcon src={reports} alt="reports" />
            </ControlButton2>
            </NavLink>
            <NavLink
              to="/password-reset"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
            <ControlButton2 jc>
              <DashIcon src={settingsIcon} alt="settings" />
            </ControlButton2>
            </NavLink>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <PcLogo
            ht
            wt
            src={pcLogo}
            alt="PcLogo"
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginLeft: "20px",
            }}
          />
          <ButtonWrapper>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
              <ControlButton2>
                <DashIcon src={dashIcon} alt="DashIcon" />
                <ActionText>Dashboard</ActionText>
              </ControlButton2>
            </NavLink>
            <NavLink
              to="/upload-schedules"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
              <ControlButton2>
                <DashIcon src={uploadScheduleIcon} alt="uploadScheduleIcon" />
                <ActionText>upload schedules</ActionText>
              </ControlButton2>
            </NavLink>
            <NavLink
              to="/unsubmitted-schedules"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
              <ControlButton2>
                <DashIcon
                  src={unsubmittedScheduleIcon}
                  alt="unsubmittedScheduleIcon"
                />
                <ActionText>Un-Submitted Schedules</ActionText>
              </ControlButton2>
            </NavLink>
            <NavLink
              to="/submitted-schedules"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
              <ControlButton2>
                <DashIcon
                  src={submittedScheduleIcon}
                  alt="submittedScheduleIcon"
                />
                <ActionText>Submitted Schedules</ActionText>
              </ControlButton2>
            </NavLink>
            <NavLink
              to="/reports"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
              <ControlButton2>
                <DashIcon src={reports} alt="reports" />
                <ActionText>Reports</ActionText>
              </ControlButton2>
            </NavLink>
            <NavLink
              to="/password-reset"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5B9B45" : "null",
                  textDecoration: "none",
                };
              }}
            >
              <ControlButton2>
                <DashIcon src={reports} alt="change password" />
                <ActionText>Change Password</ActionText>
              </ControlButton2>
            </NavLink>
          </ButtonWrapper>
        </>
      )}
    </NavWrapper>
  );
};

export default LeftNav;
