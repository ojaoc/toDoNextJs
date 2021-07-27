import React from 'react';
import { itemContainer } from 'styles/BoardItem.module.scss';
import { customInput, customLabel } from 'styles/Checkbox.module.scss';

const BoardItem = ({ description, url }) => {
  const id = `todo-${url}`;

  return (
    <div className={itemContainer}>
      <input className={customInput} type="checkbox" id={id} name={id} value={id} />
      <label className={customLabel} htmlFor={id} data-content={description}>
        {description}
      </label>
    </div>
  );
};

export default BoardItem;
