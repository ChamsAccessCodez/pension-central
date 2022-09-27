import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import MUIDataTable from "mui-datatables";

const UnsubmittedSchedule = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    onSubmit();
  }, []);
  // variable to store the data gotten from the endpoint
  let fakeData = [];
  // using materia ui table format to render columns and rows of a table
  // declare the column head
  const columns = [
    {
      name: "amount",
      label: "Amount",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "employerName",
      label: "Employee Name",
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
      name: "paymentMode",
      label: "Payment Mode",
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
      name: "recordCount",
      label: "Record Count",
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
  ];

  // set the array of data for table rows to be the new state
  const data = result;

  // set an option column for filter purpose
  const options = {
    filterType: "checkbox",
  };
  // end of material ui construct.

  const scheduleSchema = yup.object().shape({
    email: yup.string().required("Email address cannot be empty"),
    // employerCode: yup.string().required("Employee code cannot be empty"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(scheduleSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    // console.log(value);
    const { email } = value;
    // const { email, employerCode } = value;
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
          clientId: email,
          // employerCode: employerCode,
        },
      });
      fakeData = data.data;
      setResult(fakeData);
      // console.log(user.token);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successful!",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        // timer: 1500
      }).then(() => {
        console.log(data);
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
    <UnsubmittedWrapper>
      <FormHolder>
        <FormHolder1>
          {/* <ErrorMessage
            errors={errors}
            name="email"
            message="email name is required."
          /> */}
          <ClientId
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "This is a required field",
            })}
          />
        </FormHolder1>
        <Submit
          type="submit"
          onClick={() => {
            // setLoading(!loading);
            onSubmit();
          }}
        >
          Submit
        </Submit>
      </FormHolder>
      <UnsubmittedSchedulesResult>
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
              unsubmitted schedule
            </span>{" "}
            yet.
          </div>
        ) : (
          <>
            {result.map((res, index) => (
              <div key={index}>
                <MUIDataTable
                  title={"Employee List"}
                  data={data}
                  columns={columns}
                  options={options}
                />
              </div>
            ))}
          </>
        )}
      </UnsubmittedSchedulesResult>
    </UnsubmittedWrapper>
  );
};

export default UnsubmittedSchedule;

const UnsubmittedWrapper = styled.div`
  background: #d0f2fe;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ClientId = styled.input`
  width: 400px;
  height: 40px;
  outline: none;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding-left: 5px;

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
const EmployeeCode = styled.input`
  height: 40px;
  width: 400px;
  width: 400px;
  height: 40px;
  outline: none;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding-left: 5px;

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
const Submit = styled.button`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background: green;
  // background: #82c7fe;
  border-radius: 5px;
  height: 43px;
  font-family: Poppins;
  font-weight: 500;
  color: white;
  margin-left: 5px;
  transition: background 1s;

  :hover {
    //   // border: 1px solid #ffffff;
      background: #206cb1;
  }
`;
const FormHolder = styled.div`
  width: inherit;
  // background: red;
  display: flex;
  justify-content: center;
  // justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 50px;
`;
const FormHolder1 = styled.div`
  // width: inherit;
  // width: 50%;
  // background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 5px;
  height: inherit;
`;
const UnsubmittedSchedulesResult = styled.div`
  width: 95%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;
const ErrorMessage = styled.div`
  font-size: smaller;
  color: red;
  width: 100%;
  margin-bottom: 5px;
`;
