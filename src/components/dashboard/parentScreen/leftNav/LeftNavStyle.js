import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  //   background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 10px;
`;
export const PcLogo = styled.img`
  width: ${({ wt }) => (wt ? "116px" : "30px")};
  height: ${({ ht }) => (ht ? "48px" : "30px")};
`;
export const ButtonWrapper = styled.div`
  width: 90%;
  max-width: 200px;
  height: 70%;
//   background: grey;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
export const ControlButton = styled.button`
  background: inherit;
  height: 50px;
  width: 100%;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
//   justify-content: space-around;
  justify-content: ${({ jc }) => (jc ? "center" : "flex-start")};
  align-items: center;
  font-weight: normal;
  //   color: #000000;
  transition: background 1s;

  :hover {
    background: #d0e9fd;
    font-weight: bold;
    color: #206cb1;
  }

  &:active {
    background: #D0E9FD;
  }
`;
export const ControlButton2 = styled.button`
  background: inherit;
  height: 50px;
  width: 100%;
  border: none;
  cursor: pointer;
  display: flex;
//   justify-content: flex-start;
justify-content: ${({ jc }) => (jc ? "center" : "flex-start")};
  align-items: center;
  font-weight: normal;
  transition: background 1s;

  :hover {
    background: #d0e9fd;
    font-weight: bold;
    color: #206cb1;
  }

  .active{
    background: yellow;
    height: 50px;
  }
`;
export const DashIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  margin-left: 5px;
`;
export const ActionText = styled.div`
  text-transform: capitalize;
  font-size: 12px;
`;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
