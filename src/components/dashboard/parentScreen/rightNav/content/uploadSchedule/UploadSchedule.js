import React from "react";
import styled from "styled-components";
import cautionIcon from "../../../../../../images/warning-filled.png";

const UploadSchedule = () => {
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
        <form>
          <InputRow>
            <RealInput
              type="input"
              placeholder="Choose file"
              // onChange={}
            />
            <Browse>browse</Browse>
          </InputRow>
          <ActionRow>
            <UploadSchedu>
              <Text>Upload Schedule</Text>
            </UploadSchedu>
            <DownloadSchedule>
              <Text style={{ color: "#82c7fe" }}>Download Schedule</Text>
            </DownloadSchedule>
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
  line-height: 18px;
  color: #000000;
  marginbottom: 14px;
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
const InputRow = styled.div`
  width: 100%;
  // background: red;
  display: flex;
  margin-bottom: 10px;
`;
const RealInput = styled.input`
  width: 250px;
  height: 30px;
  outline: none;
  border: 1px solid #d1d1d1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 5px;

  ::placeholder {
    padding-left: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.59);
  }

  :active {
    border: 1px solid #82c7fe;
  }
  :hover {
    border: 1px solid #82c7fe;
  }
`;
const Browse = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  background: #ffffff;
  color: rgba(0, 0, 0, 0.59);
  padding-left: 15px;
  padding-right: 15px;
  text-transform: capitalize;
  border: 1px solid #d1d1d1;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
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
  width: 150px;
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
  width: 150px;
`;
const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
`;
// const ActionRow = styled.div`
// `;
