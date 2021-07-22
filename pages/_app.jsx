import React from 'react';
import '../styles/globals.scss';
import { container } from 'styles/App.module.scss';
import Header from 'components/Header';
import '@fontsource/josefin-sans';
import { IconContext } from 'react-icons/lib';

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <div className={container}>
        <Header />
        <Component {...pageProps} />
      </div>
    </IconContext.Provider>
  );
}

export default MyApp;
