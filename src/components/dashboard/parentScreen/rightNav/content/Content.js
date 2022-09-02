import React, { useState } from "react";
import {
  ContentWrapper,
  NavName,
  NavCard,
  NavLine,
  NavContent,
  NavCardContainer,
  UploadIcon,
  Figure,
  Name,
} from "./ContentStyle";
import uploadIcon from "../../../../../images/uploadIcon.png";
import unsubmittedScheduleIcon from "../../../../../images/unsubmittedSchedule.png";
import submittedScheduleIcon2 from "../../../../../images/submittedScheduleIcon2.png";
import reportIcon from "../../../../../images/reportIcon.png";
import Normal from "./normal/Normal"
import UploadSchedule from "./uploadSchedule/UploadSchedule"
import UnsubmittedSchedule from "./unsubmittedSchedule/UnsubmittedSchedule"
import SubmittedSchedule from "./submittedSchedule/SubmittedSchedule"
import Reports from "./reports/Reports"

const Content = () => {
  const [normal, setNormal] = useState(true);
  const [uploads, setUploads] = useState(false);
  const [unsubmittedSchedule, setUnsubmittedSchedule] = useState(false);
  const [submittedSchedule, setSubmittedSchedule] = useState(false);
  const [report, setReport] = useState(false);

  //   show only normal component
  const showNormal = () => {
    setNormal(true);
    setUploads(false);
    setUnsubmittedSchedule(false);
    setSubmittedSchedule(false);
    setReport(false);
  };
  //   show only uploads component
  const showUploads = () => {
    setNormal(false);
    setUploads(true);
    setUnsubmittedSchedule(false);
    setSubmittedSchedule(false);
    setReport(false);
  };
  //   show only unsubmittedSchedule component
  const showUnsubmittedSchedule = () => {
    setNormal(false);
    setUploads(false);
    setUnsubmittedSchedule(true);
    setSubmittedSchedule(false);
    setReport(false);
  };
  //   show only submittedSchedule component
  const showSubmittedSchedule = () => {
    setNormal(false);
    setUploads(false);
    setUnsubmittedSchedule(false);
    setSubmittedSchedule(true);
    setReport(false);
  };
  //   show only report component
  const showReport = () => {
    setNormal(false);
    setUploads(false);
    setUnsubmittedSchedule(false);
    setSubmittedSchedule(false);
    setReport(true);
  };

  return (
    <ContentWrapper>
      {normal ? <NavName onClick={showNormal}>Dashboard</NavName> : (null)}
        {uploads ? <NavName onClick={showUploads}>Schedule<span>Upload Schedules</span></NavName>: (null)}
        {unsubmittedSchedule ? <NavName onClick={showUnsubmittedSchedule}>Schedule<span>Unsubmitted Schedules</span></NavName> : (null)}
        {submittedSchedule ? <NavName onClick={showSubmittedSchedule}>Schedule<span>Submitted Schedules</span></NavName> : (null)}
        {report ? <NavName onClick={showReport}>Schedule<span>Reports</span></NavName> : (null)}
      <NavCard>
        <NavCardContainer 
        onClick={showUploads}>
          <UploadIcon src={uploadIcon} alt=" Icon Sample" />
          <Figure>70+</Figure>
          <Name>Upload Schedules</Name>
        </NavCardContainer>
        <NavCardContainer 
        onClick={showUnsubmittedSchedule} 
        style={{
            background: "#D0F2FE",
        }}>
          <UploadIcon src={unsubmittedScheduleIcon} alt=" Icon Sample" />
          <Figure style={{color: "#06297A"}}>70+</Figure>
          <Name style={{color: "#06297A"}}>Unsubmitted Schedules</Name>
        </NavCardContainer>
        <NavCardContainer 
        onClick={showSubmittedSchedule}
        style={{
            background: "#FFF8CE",
        }}>
          <UploadIcon src={submittedScheduleIcon2} alt=" Icon Sample" />
          <Figure style={{color: "#7A5002"}}>70+</Figure>
          <Name style={{color: "#7A5002"}}>Submitted Schedules</Name>
        </NavCardContainer>
        <NavCardContainer 
        onClick={showReport}>
          <UploadIcon src={reportIcon} alt=" Icon Sample" />
          <Figure>70+</Figure>
          <Name>Reports</Name>
        </NavCardContainer>
      </NavCard>
      <NavLine></NavLine>
      <NavContent>
        {normal ? <Normal /> : (null)}
        {uploads ? <UploadSchedule /> : (null)}
        {unsubmittedSchedule ? <UnsubmittedSchedule /> : (null)}
        {submittedSchedule ? <SubmittedSchedule /> : (null)}
        {report ? <Reports /> : (null)}
      </NavContent>
    </ContentWrapper>
  );
};

export default Content;
