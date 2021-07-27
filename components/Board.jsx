import React from 'react';
import { board } from 'styles/Board.module.scss';
import BoardItem from './BoardItem';

const Board = ({ tasks }) => (
  <div className={board}>
    {tasks?.map(({ description, url }) => (
      <BoardItem
        key={url}
        description={description}
        url={url}
      />
    ))}
  </div>
);

export default Board;
