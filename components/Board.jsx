/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react';
import { board } from 'styles/Board.module.scss';
import axios from 'axios';
import apiBaseUrl from 'utils/apiBaseUrl';
import BoardItem from './BoardItem';
import AddBoardItem from './AddBoardItem';
import ClearDoneTasks from './ClearDoneTasks';

const Board = ({ tasks, mutate }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const deleteDoneTasks = useCallback(async () => {
    setLoadingDelete(true);
    const listIds = tasks.filter((task) => task.is_done).map((task) => task.id);
    try {
      await axios.post(`${apiBaseUrl}/tasks/delete_several`, { task_ids: listIds });
      mutate();
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingDelete(false);
    }
  }, [tasks]);

  return (
    <div className={board}>
      <AddBoardItem isAdding={isAdding} setIsAdding={setIsAdding} mutate={mutate} />
      <ClearDoneTasks onClick={deleteDoneTasks} />
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
