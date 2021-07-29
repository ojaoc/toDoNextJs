import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { itemContainer } from 'styles/BoardItem.module.scss';
import { customInput, customLabel, loader } from 'styles/Checkbox.module.scss';

const RegularBoardItem = ({
  loadingPatch, id, toggleIsDone, isDone, description,
}) => (loadingPatch
  ? <div className={loader} />
  : (
    <>
      <input className={customInput} type="checkbox" id={id} name={id} value={id} onChange={toggleIsDone} checked={isDone} />
      <label className={customLabel} htmlFor={id} data-content={description}>
        {description}
      </label>
    </>
  ));

const NewBoardItem = ({
  id, description, handleChangeDescription, handleSubmit,
}) => (
  <form onSubmit={handleSubmit(description)}>
    <input
      type="text"
      id={id}
      className={customLabel}
      value={description}
      onChange={handleChangeDescription}
    />
    <button type="submit">Add</button>
  </form>
);

const BoardItem = ({
  description, url, isDone, mutate, isNew, handleChangeDescription, handleSubmit,
}) => {
  const [loadingPatch, setLoadingPatch] = useState(false);
  const id = `todo-${url}`;

  const toggleIsDone = useCallback(async () => {
    const timer = setTimeout(() => setLoadingPatch(true), 400);
    try {
      await axios.patch(url, { is_done: !isDone });
      mutate();
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingPatch(false);
      clearTimeout(timer);
    }
  }, [isDone]);

  return (
    <div className={itemContainer}>
      {isNew ? (
        <NewBoardItem
          id={id}
          description={description}
          handleChangeDescription={handleChangeDescription}
          handleSubmit={handleSubmit}
        />
      ) : (
        <RegularBoardItem
          loadingPatch={loadingPatch}
          id={id}
          toggleIsDone={toggleIsDone}
          isDone={isDone}
          description={description}
        />
      )}
    </div>
  );
};

export default BoardItem;
