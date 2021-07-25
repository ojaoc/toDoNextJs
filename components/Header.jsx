import React from 'react';
import {
  appLabel, icon, darkModeContainer, mainContainer, iconButton, separator,
} from 'styles/Header.module.scss';
import { RiCalendarCheckFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import DarkModeBtn from './DarkModeBtn';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

  return (
    <>
      <div className={mainContainer}>
        <div className={appLabel}>
          <RiCalendarCheckFill className={icon} />
          To Do
        </div>
        <div className={darkModeContainer}>
          <DarkModeBtn darkModeEnabled={theme === 'dark'} iconClass={iconButton} onClick={toggleDarkMode} />
        </div>
      </div>
      <hr className={separator} />
    </>
  );
};

export default Header;
