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
`;
export const BrandAdd = styled.div`
  background: rgba(236, 236, 236, 0.5);
  position: relative;
  width: 50%;
  height: 100%;
`;
export const PensionLogo = styled.img`
  position: absolute;
  width: 246px;
  height: 101px;
  z-index: 1000;
  left: 20%;
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
`;
// export const BoardContent = styled.div`
// `;
