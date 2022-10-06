import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import axios from "axios";
import decoded from "jwt-decode";

const Card = ({ dashWord, submitWord, unsubmitWord, reportWord, passWord }) => {
  const [submittedResult, setSubmittedResult] = useState([]);
  const [unSubmittedResult, setUnSubmittedResult] = useState([]);
  // get current user from persistReducer
  const user = useSelector((state) => state.persistedReducer.current);
  // variable to store the data gotten from the endpoint
  let fakeDataSubmitted = [];
  let fakeDataUnsubmitted = [];

  // decode the token
  let decoder;
  if (user) {
    const decode = user.token;
    decoder = decoded(decode);
  }

  useEffect(() => {
    subSchedule();
    unSubSchedule();
  }, []);

  // get all submitted schedules
  const subSchedule = async () => {
    try {
      const url = "https://sandbox.findfood.ng/api/SubmittedSchedules/all";

      const { data } = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
          Accept: "*",
          mode: "cors",
        },
        url: url,
        method: "post",
        data: {
          // clientId: decoder.unique_name,
          clientId: "ep@gmail.com",
          // employerCode: employerCode,
        },
      });
      // console.log(data);
      fakeDataSubmitted = data.data;
      setSubmittedResult(fakeDataSubmitted);
    } catch (error) {
      console.log(error);
    }
  };
  // get all unsubmitted schedules
  const unSubSchedule = async () => {
    try {
      const url = "https://sandbox.findfood.ng/api/UnsubmittedSchedules/all";

      const { data } = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
          Accept: "*",
          mode: "cors",
        },
        url: url,
        method: "post",
        data: {
          // clientId: decoder.unique_name,
          clientId: "ep@gmail.com",
          // employerCode: employerCode,
        },
      });
      // console.log(data);
      fakeDataUnsubmitted = data.data;
      setUnSubmittedResult(fakeDataUnsubmitted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentWrapper>
      {dashWord ? (
        <NavName>
          Schedule<span>Upload Schedules</span>
        </NavName>
      ) : submitWord ? (
        <NavName>
          Schedule<span>Submit Schedules</span>
        </NavName>
      ) : unsubmitWord ? (
        <NavName>
          Schedule<span>Unsubmit Schedules</span>
        </NavName>
      ) : reportWord ? (
        <NavName>
          Schedule<span>Reports</span>
        </NavName>
      ) : passWord ? (
        <NavName>
          Settings<span>Change Password</span>
        </NavName>
      ) : (
        <NavName>Dashboard</NavName>
      )}
      <NavCard>
        <NavCardContainer to="/upload-schedules">
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
          <Figure style={{ color: "#06297A" }}>
            {unSubmittedResult.length}
          </Figure>
          <Name style={{ color: "#06297A" }}>Unsubmitted Schedules</Name>
        </NavCardContainer>
        <NavCardContainer
          to="/submitted-schedules"
          style={{
            background: "#FFF8CE",
          }}
        >
          <UploadIcon src={submittedScheduleIcon2} alt=" Icon Sample" />
          <Figure style={{ color: "#7A5002" }}>{submittedResult.length}</Figure>
          <Name style={{ color: "#7A5002" }}>Submitted Schedules</Name>
        </NavCardContainer>
        <NavCardContainer
          to="/reports"
          style={{
            background: "#FFE8DA",
          }}
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
