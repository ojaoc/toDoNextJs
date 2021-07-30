import React from 'react';
import { buttonContainer, button } from 'styles/BoardItem.module.scss';

const ClearDoneTasks = ({ onClick, isAdding }) => (
  <div className={buttonContainer}>
    <button type="button" onClick={onClick} className={button}>
      {isAdding ? 'Close' : 'Clear'}
    </button>
  </div>
);

export default ClearDoneTasks;
