import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';
import { HeaderWrapper, One, Two, Settings, PersonContent, PersonImage, PersonName, Me} from "./HeaderStyle"
import settingsIcon from "../../../../../images/settingIcon.png"
import personAvatar from "../../../../../images/userAvatar.png"

const Header = () => {
  return (
    <HeaderWrapper>
        <One>Hi, Welcome back <span> Muomaife</span></One>
        <Two>
            <Settings src={settingsIcon} alt="settingsIcon" />
            <PersonContent>
                <PersonImage src={personAvatar} alt="personAvatar" />
                <PersonName>
                <Me>Muomaife</Me>
                <RiArrowDownSLine />
                </PersonName>
            </PersonContent>
        </Two>
    </HeaderWrapper>
  )
}

export default Header;