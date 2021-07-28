/* eslint-disable camelcase */
import React from 'react';
import { board } from 'styles/Board.module.scss';
import BoardItem from './BoardItem';

const Board = ({ tasks, mutate }) => (
  <div className={board}>
    {tasks?.map(({ description, url, is_done }) => (
      <BoardItem
        key={url}
        description={description}
        url={url}
        isDone={is_done}
        mutate={mutate}
      />
    ))}
  </div>
);

export default Board;
