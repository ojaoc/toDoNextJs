import axios from 'axios';
import React from 'react';
import { itemContainer } from 'styles/BoardItem.module.scss';
import { customInput, customLabel } from 'styles/Checkbox.module.scss';
import apiBaseUrl from 'utils/apiBaseUrl';

const BoardItem = ({
  description, url, isDone, mutate,
}) => {
  const id = `todo-${url}`;

  const toggleIsDone = async () => {
    try {
      const response = await axios.patch(url, { is_done: !isDone });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={itemContainer}>
      <input className={customInput} type="checkbox" id={id} name={id} value={id} onClick={toggleIsDone} checked={isDone} />
      <label className={customLabel} htmlFor={id} data-content={description}>
        {description}
      </label>
    </div>
  );
};

export default BoardItem;
