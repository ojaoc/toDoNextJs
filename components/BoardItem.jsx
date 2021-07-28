import axios from 'axios';
import React, { useState } from 'react';
import { itemContainer } from 'styles/BoardItem.module.scss';
import { customInput, customLabel, loader } from 'styles/Checkbox.module.scss';

const BoardItem = ({
  description, url, isDone, mutate,
}) => {
  const [loadingPatch, setLoadingPatch] = useState(false);
  const id = `todo-${url}`;

  const toggleIsDone = async () => {
    const timer = setTimeout(() => setLoadingPatch(true), 400);
    try {
      await axios.patch(url, { is_done: !isDone });
      mutate();
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingPatch(false);
      clearTimeout(timer);
    }
  };

  return (
    <div className={itemContainer}>
      {loadingPatch
        ? <div className={loader} />
        : <input className={customInput} type="checkbox" id={id} name={id} value={id} onChange={toggleIsDone} checked={isDone} /> }
      <label className={customLabel} htmlFor={id} data-content={description}>
        {description}
      </label>
    </div>
  );
};

export default BoardItem;
