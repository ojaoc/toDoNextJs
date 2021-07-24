import React from 'react';
import {
  appLabel, icon, darkModeContainer, mainContainer, iconButton, separator,
} from 'styles/Header.module.scss';
import { RiCalendarCheckFill } from 'react-icons/ri';
import DarkModeBtn from './DarkModeBtn';

const toggleDarkMode = () => {

};

const Header = () => (
  <>
    <div className={mainContainer}>
      <div className={appLabel}>
        <RiCalendarCheckFill className={icon} />
        To Do
      </div>
      <div className={darkModeContainer}>
        <DarkModeBtn iconClass={iconButton} onClick={toggleDarkMode} />
      </div>
    </div>
    <hr className={separator} />
  </>
);

export default Header;
