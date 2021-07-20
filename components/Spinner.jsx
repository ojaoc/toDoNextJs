import React from 'react';
import {
  spinner,
  doubleBounce1,
  doubleBounce2,
  spinnerContainer,
} from 'styles/Spinner.module.scss';

const Spinner = ({ active }) => active && (
  <div className={spinnerContainer}>
    <div className={spinner}>
      <div className={doubleBounce1} />
      <div className={doubleBounce2} />
    </div>
  </div>
);

export default Spinner;
