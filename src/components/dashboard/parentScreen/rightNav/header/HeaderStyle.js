import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background: #F8F8F8;
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
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;
export const PersonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
//   background: green;
  cursor: pointer;

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
export const PersonName = styled.div`
  display: flex;
//   justify-content: center;
  justify-content: space around;
  align-items: center;
`;
export const Me = styled.div`
  text-transform: capitalize;
`;
// export const HeaderWrapper = styled.div`
// `;
// export const HeaderWrapper = styled.div`
// `;
