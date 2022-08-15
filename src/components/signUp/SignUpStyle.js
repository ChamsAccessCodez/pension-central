import styled from "styled-components";

export const SignUpWrapper = styled.div`
  background: inherit;
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SignUpContent = styled.div`
  // background: red;
  height: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;
export const SignUpHeader = styled.div`
  width: 100%;
  height: 40px;
  left: 120px;
  top: 156px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #000000;
  text-transform: capitalize;
  margin-bottom: 20px;
`;
export const InputWrapper = styled.div`
  background: tomato;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #f8f8f8;
  border-radius: 4px;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  background: inherit;
  width: 100%;
  height: 80%;
  border: none;
  outline: none;
  margin-left: 10px;

  :focus {
    border: 1px solid #0b9444;
    border-radius: 4px;
  }
  :hover {
    border: 1px solid #2b93f3;
    border-radius: 4px;
  }
  ::placeholder {
    font-size: 1em;
    color: #4a4a4a;
    // padding: 5px;
    text-transform: capitalize;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
`;
export const Button = styled.div`
  background: #2b93f3;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-transform: capitalize;
`;
export const Switcher = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 20px;

  span {
    color: #206cb1;
    margin-left: 5px;
    cursor: pointer;
  }
`;
// export const SignUpWrapper = styled.div``;
// export const SignUpWrapper = styled.div``;
