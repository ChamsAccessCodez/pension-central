import styled from "styled-components";

export const ContentWrapper = styled.div`
  background: inherit;
  width: 90%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const NavName = styled.p`
  margin-top: 40px;
  font-family: Poppins;
  font-weight: 600;
  weight: 600;
  color: #206cb1;
  font-size: 18px;
  cursor: pointer;

  span{
    font-size: 12px;
    font-weight: 400;
    margin-left: 5px;
  }
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
export const NavCardContainer = styled.div`
  width: 239px;
  height: 157px;
  background: #d0e9fd;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    box-shadow: 1px 1px 4px 1px rgba(58, 58, 58, 0.22);
  }
`;
export const UploadIcon = styled.img`
  height: 49px;
  width: 49px;
`;
export const Figure = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
margin-top: 8px;
color: #071B64;
`;
export const Name = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #071B64;
`;
export const NavLine = styled.div`
width: 100%;
height: 0px;
border: 0.5px solid #D1D1D1;
margin-top: 8px;
margin-bottom: 18px;
`;
export const NavContent = styled.div`
width: 100%;
min-height: 50vh;
display: flex;
justify-content: center;
align-items: center;
background: grey;
`;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
// export const ContentWrapper = styled.div``;
