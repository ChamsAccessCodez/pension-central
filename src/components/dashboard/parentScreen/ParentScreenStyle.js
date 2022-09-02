import styled from "styled-components";

export const Wrapper = styled.div`
  background: #F8F8F8;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
`;
export const ParentNav = styled.div`
  background: #F8F8F8;
  width: ${({wt})=>wt ? "15%" : "5%"};
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-right: 1px solid #D1D1D1;

  position: sticky:
  top: 0;
`;
export const ParentContent = styled.div`
  background: #F8F8F8;
  flex: 1;
  // flex: 1 auto;
  height: inherit;
`;
export const IconBack = styled.img`
  position: absolute;
  height: 30px;
  width: 30px;
  border: none;
  right: 20px;
  bottom: 100px;
  cursor: pointer;

  :hover {
    border-radius: 50%;
    box-shadow: 1px 1px 4px 1px rgba(128,128,128, 0.7);
  }
`;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
// export const Wrapper = styled.div``;
