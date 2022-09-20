import React, { useState } from "react";
import styled from "styled-components";
import cautionIcon from "../../../../../../images/warning-filled.png";
import axios from "axios";
import * as XLSX from "xlsx";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import decoded from "jwt-decode";
import FileDownload from "js-file-download";
import downloadIcon from "../../../../../../images/downloadIcon.png"
import uploadIcon from "../../../../../../images/uploadIcon1.png"

const UploadSchedule = () => {
  const user = useSelector((state) => state.persistedReducer.current);

  const [file, setFile] = useState();
  let [result, setResult] = useState();

  // handle download
  const handleDownload = (e) => {
    e.preventDefault();
    axios({
      url: "https://download.findfood.ng/",
      // url: "http://localhost:8000/",
      method: "GET",
      responseType: "blob",
      Accept: "*",
      mode: "cors",
    }).then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.responseMessage,
        text: "The schedule template was downloaded successfully",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: true,
      });
      console.log(res);
      FileDownload(res.data, "HR-schedule-template.xlsx");
    });
  };

  // handle any change on input field
  const handleChange = (e) => {
    // Solution one
    setFile(e.target.files[0]);
    console.log(e.target.files);

    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        console.log(json);
        // create a dictionary of months
        const monthMap = {
          JANUARY: 1,
          FEBRUARY: 2,
          MARCH: 3,
          APRIL: 4,
          MAY: 5,
          JUNE: 6,
          JULY: 7,
          AUGUST: 8,
          SEPTEMBER: 9,
          OCTOBER: 10,
          NOVEMBER: 11,
          DECEMBER: 12,
        };

        let schedules = json.map((schedule) => {
          // create an empty object to store the updatedSchedule mapped from uploaded file to the database schedule keys.
          let updatedSchedule = {};
          updatedSchedule.pfaCode = schedule.PFACode;
          updatedSchedule.rsaPin = schedule.RSAPIN;
          updatedSchedule.firstName = schedule.Firstname;
          updatedSchedule.middleName = schedule.Middlename;
          updatedSchedule.lastName = schedule.Lastname;
          updatedSchedule.employerContribution = schedule.EmployerContribution;
          updatedSchedule.employeeContribution = schedule.EmployeeContribution;
          updatedSchedule.voluntaryContribution =
            schedule.VoluntaryContribution;
          updatedSchedule.employerVoluntaryContribution =
            schedule.employervoluntaryconribution;
          updatedSchedule.scheduleMonth =
            monthMap[schedule.PaymentMonth.toUpperCase()];
          updatedSchedule.scheduleYear = schedule.PaymentYear;
          updatedSchedule.staffId = schedule.staffid;
          console.log(updatedSchedule);
          return updatedSchedule;
        });
        console.log(schedules);
        setResult(schedules);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  // handle submit events
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://sandbox.findfood.ng/api/SubmitSchedules/schedules";

    // decode the token to get the user content
    let decoder;
    if (user) {
      const decode = user.token;
      decoder = decoded(decode);
    }
    const payload = {
      clientId: decoder && decoder.nameid,
      // clientId: "test@test.com",
      employer: {
        employerCode: "c200",
        employerName: "test",
        employerEmail: "ubani.udochukwu@gmail.com",
        employerPhone: "07000000001",
      },
      schedules: result,
      scheduleReference: uuidv4(),
    };
    console.log(JSON.stringify(payload));

    axios(url, {
      method: "post",
      data: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.responseMessage,
          text: "Your schedule has been uploaded successfully.",
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: true,
        });
        console.log(res);
        setFile("");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: err.code,
          text: "There was an error uploading your schedule.",
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: true,
        });
        console.log(err);
        setFile("");
      });
  };

  return (
    <UploadWrapper>
      <Notice>
        <NonCaution>
          Click 'Download Schedule' button below to download the schedule
          template file, populate your schedule in the file and upload back to
          proceed.
        </NonCaution>
        <Caution>
          <CautionIcon src={cautionIcon} alt="caution-icon" />
          <CautionText>
            NOTE: Do not populate schedules for different companies in the same
            file.
          </CautionText>
        </Caution>
      </Notice>
      <UploadForm>
        <form
          encType="multipart/form-data"
          style={{
            width: "70%",
          }}
          onSubmit={handleSubmit}
        >
          <InputRow>
            <RealInput
              type="file"
              accept=".xlsx"
              placeholder="Choose file"
              onChange={handleChange}
              style={{
                display: "none",
              }}
            />
            <p
              style={{
                paddingLeft: "10px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.39)",
              }}
            >
              Choose File
            </p>
            <span
              style={{
                color: "green",
                fontSize: "12px",
              }}
            >
              {/* {console.log(file && file.name)} */}
              {file && file.name}
            </span>
            <Browse>browse</Browse>
          </InputRow>
          <ActionRow>
          <DownloadSchedule
              onClick={(e) => {
                handleDownload(e);
              }}
            >
              <DownloadIcon src={downloadIcon} alt="Download" />
              <Text style={{ color: "#82c7fe" }}>Download Schedule</Text>
            </DownloadSchedule>
            <UploadSchedu type="submit">
              <UploadIcon src={uploadIcon} alt="Upload" />
              <Text>Upload Schedule</Text>
            </UploadSchedu>
          </ActionRow>
        </form>
      </UploadForm>
    </UploadWrapper>
  );
};

export default UploadSchedule;

const UploadWrapper = styled.div`
  // background: brown;
  width: 90%;
  height: 50%;
  // height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Notice = styled.div`
  background: #ffffff;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NonCaution = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  // color: #82c7fe;
  // color: rgba(0, 0, 0, 0.39);
  margin-bottom: 14px;
  width: 70%;
`;
const Caution = styled.div`
  width: 70%;
  display: flex;
`;
const CautionIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
`;
const CautionText = styled.div`
  font-family: "Poppins";
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #ff0000;
`;
const UploadForm = styled.div`
  background: #d0e9fd;
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputRow = styled.label`
  // width: 100%;
  // testing some styling
  text-align: center;
  height: 30px;
  padding: 5px;
  border: 1px solid #000000;
  // border: 1px solid #d1d1d1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  :active {
    border: 1px solid grey;
  }
  :hover {
    // border: 1px solid #82c7fe;
    border: 1px solid grey;
  }
`;
const RealInput = styled.input`
  // width: 250px;
  // height: 30px;
  // outline: none;
  // border: 1px solid #d1d1d1;
  // border-top-left-radius: 5px;
  // border-bottom-left-radius: 5px;
  // padding-left: 5px;

  // ::placeholder {
  // padding-left: 10px;
  // font-family: "Poppins";
  // font-style: normal;
  // font-weight: 400;
  // font-size: 11px;
  // line-height: 16px;
  // color: rgba(0, 0, 0, 0.39);
  // }

  // :active {
  //   border: 1px solid #82c7fe;
  // }
  // :hover {
  //   border: 1px solid #82c7fe;
  // }
`;
const Browse = styled.div`
  height: inherit;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  background: #ffffff;
  color: #000000;
  padding-left: 15px;
  padding-right: 15px;
  text-transform: capitalize;
  border: 1px solid #d1d1d1;
  cursor: pointer;
  border-radius: 5px;
`;
// const UploadWrapper = styled.div``;
const ActionRow = styled.div`
  width: 100%;
  // background: red;
  display: flex;
  justify-content: space-between;
`;
const DownloadSchedule = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  // border: 1px solid #000000;
  background: #ffffff;
  border: 1px solid #82c7fe;
  border-radius: 5px;
  width: 180px;

  :hover {
    border: none;
  }
`;
const UploadSchedu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background: #82c7fe;
  border: 1px solid #82c7fe;
  border-radius: 5px;
  width: 180px;

  :hover {
    border: 1px solid #ffffff;
  }
`;
const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
`;
const DownloadIcon = styled.img`
hight: 20px;
width: 20px;
color: #82c7fe;
margin-right: 5px;
`;
const UploadIcon = styled.img`
hight: 20px;
width: 20px;
font-color: #ffffff;
margin-right: 5px;
`;
