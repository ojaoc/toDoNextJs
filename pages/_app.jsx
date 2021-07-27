import React, { useEffect, useState } from 'react';
import '../styles/globals.scss';
import { container } from 'styles/App.module.scss';
import '@fontsource/josefin-sans';
import '@fontsource/roboto';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'next-themes';
import Header from 'components/Header';
import Spinner from 'components/Spinner';

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <Spinner active />;

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
