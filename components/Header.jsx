import React from 'react';
import {
  appLabel, icon, darkModeContainer, mainContainer, iconButton, separator,
} from 'styles/Header.module.scss';
import { RiCalendarCheckFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import DarkModeBtn from './DarkModeBtn';

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleDarkMode = () => (resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark'));

  return (
    <div className={mainContainer}>
      <div className={separator} />
      <div className={appLabel}>
        <RiCalendarCheckFill className={icon} />
        To Do
      </div>
      <div className={darkModeContainer}>
        <DarkModeBtn darkModeEnabled={resolvedTheme === 'dark'} iconClass={iconButton} onClick={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Header;
