import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import MUIDataTable from "mui-datatables";
import ClipLoader from "react-spinners/BeatLoader";
import moment from "moment";

// loader CSS
const override = {
  width: "inherit",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
};

const Reports = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  // all endpoints
  // const scheduleStatusUrl = "https://sandbox.findfood.ng/api/Lookup/schedulestatuses";
  // const employersUrl = "https://sandbox.findfood.ng/api/Lookup/employers";
  // const paymentModeUrl = "https://sandbox.findfood.ng/api/Lookup/paymentmodes";
  // const paymentStatusUrl = "https://sandbox.findfood.ng/api/Lookup/paymentstatuses";
  // const lodgementIdUrl = "https://sandbox.findfood.ng/api/Reports/lodgement";

  useEffect(() => {
    setLoading(false);
  }, []);

  let fakeData = [];
  // set the array of data for table rows to be the new state of data
  const data = result;
  console.log(data);

  const columns = [
    {
      name: "paymentDate",
      label: "Payment Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lodgementReferenceNo",
      label: "lodgement Reference No",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "lodgementId",
      label: "Lodgement Id",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "lodgementReferenceNo",
      label: "Lodgement Reference No",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "employerName",
      label: "Employer Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "paymentMode",
      label: "Payment Mode",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "recordCount",
      label: "Record Count",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "amount",
      label: "Amount",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "scheduleStatus",
      label: "Schedule Status",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "paymentStatus",
      label: "Payment Status",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "lodgementId",
      label: "Lodgement Id",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];
  // set an option column for filter purpose
  const options = {
    filterType: "checkbox",
  };
  // end of material ui construct.

  const reportSchema = yup.object().shape({
    startDate: yup.date(),
    endDate: yup
      .date()
      .min(yup.ref("startDate"), "End date can't be before Start date"),
    cancelled: yup.string().required("Select an option"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(reportSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    // console.log(value);
    const { startDate, endDate } = value;
    try {
      // const url = "https://sandbox.findfood.ng/api/Reports/lodgement";
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
          // startDate: startDate.toISOString(),
          // endDate: endDate.toISOString(),

          clientId: "ep@gmail.com",
          employerCode: "0031",
        },
      });
      //fakeData = data.data;
      console.log(data);
      fakeData = data.data
        .filter((elem) => {
          return elem.scheduleStatus == "Submitted";
        })
        .filter((elem) => {
          return elem.paymentMode == "Electronic Bank Transfer";
        })
        .filter((elem) => {
          const date = new Date(elem.paymentDate);
          console.log(startDate, endDate, date);

          return date < endDate && date > startDate;
        });
      setResult(fakeData);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successful!",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        // timer: 1500
      }).then((e) => {
        // reset();
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Invalid data supplied.",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then(() => {
        window.location.reload(false);
      });
    }
  });

  // get current user from persistReducer
  const user = useSelector((state) => state.persistedReducer.current);

  return (
    <ReportWrapper>
      <FormWrapper>
        <FormTittle>report filter</FormTittle>
        <form
          // action="www.google.com/search"
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
                style={{
                  fontSize: "12px",
                  color: "grey",
                  textTransform: "capitalize",
                }}
              >
                start date
              </label>
              <DateInput
                // type="date.toISOString()"
                type="date"
                placeholder="YYYY/MM/DD"
                {...register("startDate")}
                required
              />
              <label
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
                <option value="cancelled" {...register("cancelled")} required>
                  Cancelled
                </option>
                <option value="submitted">Submitted</option>
                <option value="unsubmitted">Unsubmitted</option>
              </SelectStatus>
              <label
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
                style={{
                  fontSize: "12px",
                  color: "grey",
                  textTransform: "capitalize",
                }}
              >
                end date
              </label>
              <DateInput
                // type="date.toISOString()"
                type="date"
                placeholder="YYYY/MM/DD"
                {...register("endDate")}
                required
              />
              <label
                style={{
                  fontSize: "12px",
                  color: "grey",
                  textTransform: "capitalize",
                  marginTop: "10px",
                }}
              >
                payment status
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
          <Submit
            type="button"
            onClick={() => {
              console.log("clicked");
              setLoading(true);
              onSubmit();
            }}
          >
            submit
          </Submit>
        </form>
      </FormWrapper>
      <ReportResult>
        {loading ? (
          <ClipLoader
            color={"green"}
            loading={loading}
            cssOverride={override}
            size={10}
          />
        ) : (
          <>
            {data.length === 0 ? (
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                You don't have any{" "}
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  report
                </span>{" "}
                yet.
              </div>
            ) : (
              <>
                {result.map((res, index) => (
                  <div key={index} style={{ width: "100%" }}>
                    <MUIDataTable
                      title={"Employee List"}
                      data={data}
                      columns={columns}
                      options={options}
                    />
                  </div>
                ))}
                {data.length}
              </>
            )}
          </>
        )}
      </ReportResult>
    </ReportWrapper>
  );
};

export default Reports;
const ReportWrapper = styled.div`
  background: #ffe8da;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
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
  font-family: Poppins;
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
const ReportResult = styled.div``;
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
