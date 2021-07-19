import React from 'react';
import {
  spinner,
  doubleBounce1,
  doubleBounce2,
} from 'styles/Spinner.module.sass';

const Spinner = () => (
  <div className={spinner}>
    <div className={doubleBounce1} />
    <div className={doubleBounce2} />
  </div>
);

export default Spinner;
