import React from 'react'
import styled from "styled-components"

const normal = () => {
  return (
    <NormalWrapper>normal</NormalWrapper>
  )
}

export default normal;
const NormalWrapper = styled.div`
background: brown;
width: 90%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
`;