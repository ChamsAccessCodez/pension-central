import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContentWrapper = styled.div`
  background: inherit;
  width: 90%;
  display: flex;
  flex-direction: column;
  min-height: auto;
`;
export const NavName = styled.p`
  margin-top: 30px;
  font-family: Poppins;
  font-weight: 600;
  weight: 600;
  color: #206cb1;
  font-size: 18px;
  cursor: pointer;
  // display: none;
  span {
    font-size: 12px;
    font-weight: 400;
    margin-left: 5px;
`;
export const NavCard = styled.div`
  width: 100%;
  //   background: grey;
  height: 180px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const NavCardContainer = styled(NavLink)`
  width: 239px;
  height: 157px;
  background: #d0e9fd;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  text-decoration: none;

  &.active{
    transform: scale(0.9);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    -webkit-transition: transform 1s ease-in-out;
`;
export const UploadIcon = styled.img`
  height: 49px;
  width: 49px;
`;
export const Figure = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-top: 8px;
  color: #071b64;
`;
export const Name = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #071b64;
`;
export const NavLine = styled.div`
  width: 100%;
  height: 0px;
  border: 0.5px solid #d1d1d1;
  margin-top: 8px;
  margin-bottom: 18px;
`;
export const NavContent = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
`;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
