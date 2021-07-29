/* eslint-disable camelcase */
import React, { useState } from 'react';
import { board } from 'styles/Board.module.scss';
import BoardItem from './BoardItem';
import AddBoardItem from './AddBoardItem';
import ClearDoneTasks from './ClearDoneTasks';

const Board = ({ tasks, mutate }) => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className={board}>
      <AddBoardItem isAdding={isAdding} setIsAdding={setIsAdding} mutate={mutate} />
      <ClearDoneTasks />
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
};

export default Board;
