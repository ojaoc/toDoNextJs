import Spinner from 'components/Spinner';
import React, { useState } from 'react';
import Image from 'next/image';
import fetcher from 'utils/fetcher';
import useSWR from 'swr';
import apiBaseUrl from 'utils/apiBaseUrl';
import Board from 'components/Board';
import { CSSTransition } from 'react-transition-group';
import {
  spinerContainerEnter,
  spinerContainerEnterActive,
  spinnerContainerExit,
  spinnerContainerExitActive,
} from 'styles/Spinner.module.scss';

const Home = () => {
  const {
    data, error, mutate,
  } = useSWR(`${apiBaseUrl}/tasks`, fetcher);
  const [isActive, setIsActive] = useState(!data);

  return (
    <>
      <CSSTransition
        in={!error && !data}
        classNames={{
          enter: spinerContainerEnter,
          enterActive: spinerContainerEnterActive,
          exit: spinnerContainerExit,
          exitActive: spinnerContainerExitActive,
        }}
        timeout={1100}
        onExited={() => setIsActive(!error && !data)}
      >
        <Spinner active={isActive} />
      </CSSTransition>
      {error ? (
        <Image
          src="/sumfucky.gif"
          alt="Sum' fucky happened"
          layout="intrinsic"
          width={590}
          height={300}
        />
      ) : <Board tasks={data} mutate={mutate} />}

    </>
  );
};

export default Home;
