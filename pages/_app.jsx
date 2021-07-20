import React from 'react';
import '../styles/globals.scss';
import { container } from 'styles/App.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={container}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
