import React from 'react';
import '../styles/globals.scss';
import { container } from 'styles/App.module.scss';
import '@fontsource/josefin-sans';
import '@fontsource/roboto';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <div className={container}>
          <Component {...pageProps} />
        </div>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
