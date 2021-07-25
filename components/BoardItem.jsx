import React from 'react';
import { itemContainer } from 'styles/BoardItem.module.scss';

const BoardItem = ({ description }) => (
  <div className={itemContainer}>{description}</div>
);

export default BoardItem;
