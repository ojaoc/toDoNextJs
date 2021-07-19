import Spinner from 'components/Spinner';
import React from 'react';
import Image from 'next/image';

const Home = () => {
  if (true) {
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

  return <Spinner />;
};

export default Home;
