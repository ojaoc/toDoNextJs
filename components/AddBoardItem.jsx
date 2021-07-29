import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { itemContainer } from 'styles/BoardItem.module.scss';
import apiBaseUrl from 'utils/apiBaseUrl';
import BoardItem from './BoardItem';

const AddBoardItem = ({ isAdding, setIsAdding, mutate }) => {
  const [description, setDescription] = useState('');
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
    <div className={itemContainer}>
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
          <button type="button" onClick={() => setIsAdding((prev) => !prev)}>
            New task
          </button>
        )}
    </div>
  );
};

export default AddBoardItem;
