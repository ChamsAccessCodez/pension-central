import React, {useState} from "react";
import iconBack from "../../../images/IconBack.png";
import iconFront from "../../../images/IconFront.png";
import LeftNav from "../parentScreen/leftNav/LeftNav";
import RightNav from "../parentScreen/rightNav/RightNav";
import { Wrapper, ParentNav, ParentContent, IconBack, } from "./ParentScreenStyle";


const ParentScreen = () => {
    const [toggle, setToggle] = useState(false);
    const toggleMe = () =>{
        setToggle(!toggle);
    }

  return <Wrapper>
    {toggle ? (
        <ParentNav>
    <LeftNav toggle={toggle} />
    <IconBack src={iconFront} alt="Icon front" onClick={
        ()=>{
            toggleMe();
        }
    }/>
</ParentNav>
    ) : (
        <ParentNav wt>
    <LeftNav toggle={toggle} />
    <IconBack src={iconBack} alt="Icon back" onClick={
        ()=>{
            toggleMe();
        }
    }/>
</ParentNav>
    )}
    <ParentContent>
        <RightNav />
    </ParentContent>
  </Wrapper>;
};

export default ParentScreen;
