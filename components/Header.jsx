import React from 'react';
import { header, icon } from 'styles/Header.module.scss';
import { RiCalendarCheckFill } from 'react-icons/ri';

const Header = () => (

  <div className={header}>
    <RiCalendarCheckFill className={icon} />
    To Do
  </div>

);

export default Header;
