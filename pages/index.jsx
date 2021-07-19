import Spinner from 'components/Spinner';
import React from 'react';
import Image from 'next/image';
import fetcher from 'utils/fetcher';
import useSWR from 'swr';
import apiBaseUrl from 'utils/apiBaseUrl';
import Board from 'components/Board';

const Home = () => {
  const { data, error } = useSWR(`${apiBaseUrl}/list-tasks`, fetcher);

  if (error) {
    return (
      <Image
        src="/sumfucky.gif"
        alt="Sum' fucky happened"
        layout="intrinsic"
        width={590}
        height={300}
      />
    );
  }
  if (!data) return <Spinner />;

  return <Board />;
};

export default Home;
