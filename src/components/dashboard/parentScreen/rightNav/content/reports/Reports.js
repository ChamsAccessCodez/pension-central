import React from "react";
import styled from "styled-components";

const Reports = () => {
  return (
    <ReportWrapper>
      <FormWrapper>
        <FormTittle>report filter</FormTittle>
        <form
          // onSubmit={}
          style={{
            // background: "red",
            width: "90%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormDivide
            style={{
              // background: "red",
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormA>
              <label
                for="startDate"
                style={{
                  fontSize: "12px",
                  color: "grey",
                  textTransform: "capitalize",
                }}
              >
                start date
              </label>
              <DateInput id="startDate" type="date" placeholder="MM/DD/YYYY" />
              <label
                for="scheduleStatus"
                style={{
                  fontSize: "12px",
                  color: "grey",
                  textTransform: "capitalize",
                  marginTop: "10px",
                }}
              >
                schedule status
              </label>
              <SelectStatus id="scheduleStatus">
                <option value="all">ALL</option>
                <option value="canceled">Cancelled</option>
                <option value="submitted">Submitted</option>
                <option value="unsubmitted">Unsubmitted</option>
              </SelectStatus>
              <label
                for="paymentMOde"
                style={{
                  fontSize: "12px",
                  color: "grey",
                  textTransform: "capitalize",
                  marginTop: "10px",
                }}
              >
                payment mode
              </label>
              <SelectStatus id="paymentMOde">
                <option value="bank-transfer">ALL</option>
                <option value="electronic-bank-transfer">
                  Electronic Bank Transfer
                </option>
                <option value="wove-finance-transfer">
                  Woven Finance Transfer
                </option>
              </SelectStatus>
            </FormA>
            <FormB>
              <label
                for="endDate"
                style={{
                  fontSize: "12px",
                  color: "grey",
                  textTransform: "capitalize",
                }}
              >
                end date
              </label>
              <DateInput id="endDate" type="date" placeholder="MM/DD/YYYY" />
              <label
                for="paymentStatus"
                style={{
                  fontSize: "12px",
                  color: "grey",
                  textTransform: "capitalize",
                  marginTop: "10px",
                }}
              >
                schedule status
              </label>
              <SelectStatus id="paymentStatus">
                <option value="all">ALL</option>
                <option value="failed">Failed</option>
                <option value="pending">Pending</option>
                <option value="processing">processing</option>
                <option value="successful">Successful</option>
              </SelectStatus>
              <label
                for="employer"
                style={{
                  fontSize: "12px",
                  color: "grey",
                  textTransform: "capitalize",
                  marginTop: "10px",
                }}
              >
                employer
              </label>
              <SelectStatus id="employer">
                <option value="bank-transfer">ALL</option>
                <option value="electronic-bank-transfer">
                  Electronic Bank Transfer
                </option>
                <option value="wove-finance-transfer">
                  Woven Finance Transfer
                </option>
              </SelectStatus>
            </FormB>
          </FormDivide>
          <Submit>submit</Submit>
        </form>
      </FormWrapper>
    </ReportWrapper>
  );
};

export default Reports;
const ReportWrapper = styled.div`
  background: #ffe8da;
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  // background: green;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormTittle = styled.div`
  fontfamily: Poppins;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 10px;
  display: flex;
  align-self: flex-start;
  margin-left: 45px;
`;
const FormA = styled.div`
  width: 48%;
  // background: pink;
  // height: 100%;
  display: flex;
  flex-direction: column;
`;
const FormB = styled.div`
  width: 48%;
  // background: pink;
  // height: 100%;
  display: flex;
  flex-direction: column;
`;
const DateInput = styled.input`
  width: 99%;
  height: 40px;
  outline: none;
  border: 1px solid #d1d1d1;
  border-radius: 5px;

  ::placeholder {
    padding-left: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.39);
  }

  :active {
    border: 1px solid #82c7fe;
  }
  :hover {
    border: 1px solid #82c7fe;
  }
`;
const SelectStatus = styled.select`
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #d1d1d1;
  border-radius: 5px;

  ::placeholder {
    padding-left: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.39);
  }

  :active {
    border: 1px solid #82c7fe;
  }
  :hover {
    border: 1px solid #82c7fe;
  }
  option {
    color: red;
  }
`;
const FormDivide = styled.div``;
const Submit = styled.button`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background: green;
  // background: #82c7fe;
  border-radius: 5px;
  height: 45px;
  font-family: Poppins;
  font-weight: 500;
  color: white;
  text-transform: capitalize;
  font-size: 14px;
  margin-top: 20px;
  transition: background 1s;

  :hover {
    // border: 1px solid #ffffff;
    background: #206cb1;
    
  }
`;
// const ReportWrapper = styled.div`
// `;
// const ReportWrapper = styled.div`
// `;
// const ReportWrapper = styled.div`
// `;
// const ReportWrapper = styled.div`
// `;
// const ReportWrapper = styled.div`
// `;
// const ReportWrapper = styled.div`
// `;
