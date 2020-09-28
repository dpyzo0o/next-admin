import 'src/styles/global.css';
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import AppLayout from 'src/components/AppLayout';

type MyAppProps = AppProps & {
  Component: AppProps['Component'] & { layout?: React.ComponentType };
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Component.layout ?? AppLayout;

  return (
    <React.Fragment>
      <Head>
        <title>Next Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
