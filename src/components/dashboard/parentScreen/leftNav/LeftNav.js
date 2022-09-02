import React from 'react'
import {NavWrapper, PcLogo, ButtonWrapper, ControlButton, ControlButton2, DashIcon, ActionText} from "./LeftNavStyle"
import pcLogo from "../../../../images/pension-central-logo.png"
import pcLogo2 from "../../../../images/pension-central-logo2.png"
import dashIcon from "../../../../images/home.png"
import uploadScheduleIcon from "../../../../images/uploadScheduleIcon.png"
import unsubmittedScheduleIcon from "../../../../images/unsubmittedScheduleIcon.png"
import submittedScheduleIcon from "../../../../images/submittedScheduleIcon.png"
import reports from "../../../../images/reports.png"
// import { NavLink } from 'react-router-dom';

const LeftNav = ({toggle, showNormal}) => {
  return (
    <NavWrapper>
        {
            toggle ? (
                <>
                <PcLogo src={pcLogo2} alt="PcLogo" />
                <ButtonWrapper>
                    <ControlButton jc>
                        <DashIcon src={dashIcon} alt="DashIcon" />
                    </ControlButton>
                    <ControlButton2 jc>
                        <DashIcon src={uploadScheduleIcon} alt="uploadScheduleIcon" />
                    </ControlButton2>
                    <ControlButton2 jc>
                        <DashIcon src={unsubmittedScheduleIcon} alt="unsubmittedScheduleIcon" />
                    </ControlButton2>
                    <ControlButton2 jc>
                        <DashIcon src={submittedScheduleIcon} alt="submittedScheduleIcon" />
                    </ControlButton2>
                    <ControlButton2 jc>
                        <DashIcon src={reports} alt="reports" />
                    </ControlButton2>
                </ButtonWrapper>
                </>
            ) : (
                <>
                <PcLogo ht wt src={pcLogo} alt="PcLogo" style={{
                    display: "flex",
                    alignSelf: "flex-start",
                    marginLeft: "20px",
                }} />
                <ButtonWrapper>
                    <ControlButton2 onClick={{showNormal}}>
                        <DashIcon src={dashIcon} alt="DashIcon" />
                        <ActionText>Dashboard</ActionText>
                    </ControlButton2>
                    <ControlButton2>
                        <DashIcon src={uploadScheduleIcon} alt="uploadScheduleIcon" />
                        <ActionText>upload schedules</ActionText>
                    </ControlButton2>
                    <ControlButton2>
                        <DashIcon src={unsubmittedScheduleIcon} alt="unsubmittedScheduleIcon" />
                        <ActionText>Un-Submitted Schedules</ActionText>
                    </ControlButton2>
                    <ControlButton2>
                        <DashIcon src={submittedScheduleIcon} alt="submittedScheduleIcon" />
                        <ActionText>Submitted Schedules</ActionText>
                    </ControlButton2>
                    <ControlButton2>
                        <DashIcon src={reports} alt="reports" />
                        <ActionText>Reports</ActionText>
                    </ControlButton2>
                </ButtonWrapper>
                </>
            )
        }
    </NavWrapper>
  )
}

export default LeftNav