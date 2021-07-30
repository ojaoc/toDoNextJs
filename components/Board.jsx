/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react';
import { board, noTaskHeader, buttonContainer } from 'styles/Board.module.scss';
import axios from 'axios';
import apiBaseUrl from 'utils/apiBaseUrl';
import BoardItem from './BoardItem';
import AddBoardItem from './AddBoardItem';
import ClearDoneTasks from './ClearDoneTasks';

const Board = ({ tasks, mutate }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [description, setDescription] = useState('');

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

  const handleCloseAddTask = () => {
    setIsAdding(false);
    setDescription('');
  };

  return (
    <div className={board}>
      <div className={buttonContainer}>
        <AddBoardItem
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          mutate={mutate}
          description={description}
          setDescription={setDescription}
        />
        <ClearDoneTasks
          onClick={isAdding ? handleCloseAddTask : deleteDoneTasks}
          isAdding={isAdding}
        />
      </div>
      {tasks?.length < 1 ? <h4 className={noTaskHeader}>Nothing to see here!</h4>
        : tasks?.map(({ description, url, is_done }) => (
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
