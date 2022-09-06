import React from "react";
import {
  ContentWrapper,
  NavName,
  NavCard,
  NavLine,
  NavCardContainer,
  UploadIcon,
  Figure,
  Name,
} from "./CardStyle";
import uploadIcon from "../../../../../images/uploadIcon.png";
import unsubmittedScheduleIcon from "../../../../../images/unsubmittedSchedule.png";
import submittedScheduleIcon2 from "../../../../../images/submittedScheduleIcon2.png";
import reportIcon from "../../../../../images/reportIcon.png";


const Card = ({ dashWord, submitWord, unsubmitWord, reportWord }) => {

  return (
    <ContentWrapper>
      {dashWord ? (
        <NavName>
          Schedule<span>Upload Schedules</span>
        </NavName>
      ) : (
        submitWord ? (
       <NavName>
        Schedule<span>Submit Schedules</span>
      </NavName>
        ) : (
          unsubmitWord ? (
            <NavName>
             Schedule<span>Unsubmit Schedules</span>
           </NavName>
             ) : (
          reportWord ? (
            <NavName>
             Schedule<span>Reports</span>
           </NavName>
             ) : (
              <NavName>
              Dashboard
            </NavName>
             )
        )
      ))}
      <NavCard>
        <NavCardContainer 
        to="/upload-schedules"
        >
          <UploadIcon src={uploadIcon} alt=" Icon Sample" />
          <Figure>70+</Figure>
          <Name>Upload Schedules</Name>
        </NavCardContainer>
        <NavCardContainer
          to="/unsubmitted-schedules"
          style={{
            background: "#D0F2FE",
          }}
        >
          <UploadIcon src={unsubmittedScheduleIcon} alt=" Icon Sample" />
          <Figure style={{ color: "#06297A" }}>70+</Figure>
          <Name style={{ color: "#06297A" }}>Unsubmitted Schedules</Name>
        </NavCardContainer>
        <NavCardContainer
          to="/submitted-schedules"
          style={{
            background: "#FFF8CE",
          }}
        >
          <UploadIcon src={submittedScheduleIcon2} alt=" Icon Sample" />
          <Figure style={{ color: "#7A5002" }}>70+</Figure>
          <Name style={{ color: "#7A5002" }}>Submitted Schedules</Name>
        </NavCardContainer>
        <NavCardContainer 
        to="/reports"
        >
          <UploadIcon src={reportIcon} alt=" Icon Sample" />
          <Figure>70+</Figure>
          <Name>Reports</Name>
        </NavCardContainer>
      </NavCard>
      <NavLine></NavLine>
    </ContentWrapper>
  );
};

export default Card;
