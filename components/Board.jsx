import React from 'react';
import { board } from 'styles/Board.module.scss';
import BoardItem from './BoardItem';

const Board = ({ tasks }) => (
  <div className={board}>
    {tasks?.map(({ description }) => <BoardItem description={description} />)}
  </div>
);

export default Board;
