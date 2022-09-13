import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background: #f8f8f8;
  display: flex;
  justify-content: space-between;
`;
export const One = styled.div`
  // background: blue;
  width: auto;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  text-transform: capitalize;
  color: #000000;

  span {
    font-weight: bold;
    margin-left: 3px;
    color: #206cb1;
  }
`;
export const Two = styled.div`
// background: blue;
width; auto;
height; inherit;
display: flex;
justify-content: center;
align-items: center;
margin-right: 60px;
`;
export const Settings = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  cursor: pointer;
`;
export const Drop = styled.div`
  background: #ffffff;
  position: absolute;
  width: 120px;
  height: auto;
  top: 60px;
  right: 60px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  z-index: 1000;
`;
export const SettingsList = styled.div`
  //   background: #f8f8f8;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  font-family: Poppins;
  font-size: 11px;

  :hover {
    background: #d0e9fd;
    font-weight: 600;
    color: #206cb1;
  }
`;
export const PersonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //   background: green;

  > * {
    :hover {
      font-family: Poppins;
      font-weight: 500;
      color: #206cb1;
    }
  }

  > Me {
    color: red;
  }
`;
export const PersonImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`;
// export const HeaderWrapper = styled.div`
// `;
// export const HeaderWrapper = styled.div`
// `;
