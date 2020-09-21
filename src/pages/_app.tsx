import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import 'src/styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>Next Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
