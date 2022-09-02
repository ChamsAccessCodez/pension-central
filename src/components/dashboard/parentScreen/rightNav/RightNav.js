import React from 'react'
import Header from "./header/Header"
import {RightNavWrapper} from "./RightNavStyle"
import Content from "./content/Content"

const RightNav = () => {
  return (
    <RightNavWrapper>
        <Header />
        <Content />
    </RightNavWrapper>
  )
}

export default RightNav