import styled from "styled-components";

export const BoardWrapper = styled.div`
  background: #f8f8f8;
  width: 40%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// export const BoardContent = styled.div`
//   background: rgba(236, 236, 236, 0.5);
//   width: 60%;
//   height: 90%;
//   display: flex;

//   @media (max-width: 768px) {
//     // background: red;
//     width: 70%;
//   }
//   @media (max-width: 425px) {
//     width: 90%;
//   }
//   @media (max-width: 375px) {
//   }
//   @media (max-width: 320px) {
//   }
// `;
// export const BrandAdd = styled.div`
//   background: rgba(236, 236, 236, 0.5);
//   position: relative;
//   width: 50%;
//   height: 100%;

//   @media (max-width: 960px) {
//   }
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;
// export const PensionLogo = styled.img`
//   position: absolute;
//   // width: 246px;
//   // height: 101px;
//   width: 200px;
//   height: 80px;
//   z-index: 1000;
//   left: 25%;
//   top: 40%;
// `;
// export const PensionImage = styled.img`
//   background: rgba(236, 236, 236, 0.5);
//   position: absolute;
//   width: 100%;
//   height: 80%;
//   bottom: 100px;
//   z-index: 0;
// `;
// export const Square = styled.div`
//   background: rgba(236, 236, 236, 0.5);
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 500;
// `;
export const BrandForm = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    // background: red;
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const PensionLogo2 = styled.img`
  display: flex;
  // align-self: center;
  width: 120px;
  height: 50px;
  // margin-top: 20px;

  @media (min-width: 960px) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 150px;
    height: 70px;
  }
  @media (min-width: 425px) {
  }
  @media (min-width: 375px) {
  }
  @media (min-width: 320px) {
    margin-bottom: 10px;
  }
`;

export const SignUpWrapper = styled.div`
  background: inherit;
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    // background: tomato;
  }
`;
export const SignUpContent = styled.div`
  // background: red;
  height: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // align-items: left;

  @media (max-width: 768px) {
    // background: yellow;
  }
  @media (max-width: 425px) {
  }
  @media (max-width: 375px) {
    width: 80%;
  }
  @media (max-width: 320px) {
    width: 90%;
  }
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
export const Button = styled.button`
  background: #2b93f3;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
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
export const ErrorMessage = styled.div`
  font-size: smaller;
  color: red;
  width: 100%;
  margin-bottom: 5px;
`;
// export const SignUpWrapper = styled.div``;
