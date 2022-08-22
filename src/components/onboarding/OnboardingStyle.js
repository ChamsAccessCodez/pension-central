import styled from "styled-components";

export const BoardWrapper = styled.div`
  background: #f8f8f8;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoardContent = styled.div`
  background: rgba(236, 236, 236, 0.5);
  width: 60%;
  height: 70%;
  display: flex;

  @media (max-width: 768px) {
    // background: red;
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
  @media (max-width: 375px) {
  }
  @media (max-width: 320px) {
  }
`;
export const BrandAdd = styled.div`
  background: rgba(236, 236, 236, 0.5);
  position: relative;
  width: 50%;
  height: 100%;

  @media (max-width: 960px) {
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const PensionLogo = styled.img`
  position: absolute;
  // width: 246px;
  // height: 101px;
  width: 200px;
  height: 80px;
  z-index: 1000;
  left: 25%;
  top: 40%;
`;
export const PensionImage = styled.img`
  background: rgba(236, 236, 236, 0.5);
  position: absolute;
  width: 100%;
  height: 80%;
  bottom: 100px;
  z-index: 0;
`;
export const Square = styled.div`
  background: rgba(236, 236, 236, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 500;
`;
export const BrandForm = styled.div`
  background: #ffffff;
  flex: 1;
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
// export const BoardContent = styled.div`
// `;
