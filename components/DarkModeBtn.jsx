import React from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

const DarkModeBtn = ({ darkModeEnabled, iconClass, onClick }) => (darkModeEnabled
  ? <RiSunFill className={iconClass} onClick={onClick} />
  : <RiMoonFill className={iconClass} onClick={onClick} />);

export default DarkModeBtn;
