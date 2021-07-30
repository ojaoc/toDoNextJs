import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { buttonContainer, button } from 'styles/BoardItem.module.scss';
import apiBaseUrl from 'utils/apiBaseUrl';
import BoardItem from './BoardItem';

const AddBoardItem = ({
  isAdding, setIsAdding, mutate, description, setDescription,
}) => {
  const [loadingPost, setLoadingPost] = useState(false);

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = useCallback((descriptionValue) => async (e) => {
    e.preventDefault();
    setLoadingPost(true);
    try {
      await axios.post(`${apiBaseUrl}/tasks`, { description: descriptionValue });
      setIsAdding(false);
      setDescription('');
      mutate();
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingPost(false);
    }
  }, []);

  return (
    <div className={buttonContainer}>
      {isAdding ? (
        <BoardItem
          isNew
          url="new-item"
          description={description}
          handleChangeDescription={handleChangeDescription}
          handleSubmit={handleSubmit}
        />
      )
        : (
          <button
            type="button"
            onClick={() => setIsAdding((prev) => !prev)}
            className={button}
          >
            New task
          </button>
        )}
    </div>
  );
};

export default AddBoardItem;
