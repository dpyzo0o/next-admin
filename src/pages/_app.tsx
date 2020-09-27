import 'src/styles/global.css';
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import AppLayout from 'src/components/AppLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Next Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider session={pageProps.session}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
