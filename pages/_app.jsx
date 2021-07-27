import React from 'react';
import '../styles/globals.scss';
import { container } from 'styles/App.module.scss';
import '@fontsource/josefin-sans';
import '@fontsource/roboto';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'next-themes';
import Header from 'components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Header />
        <div className={container}>
          <Component {...pageProps} />
        </div>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
