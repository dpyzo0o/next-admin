import 'src/styles/global.css';
import 'node_modules/nprogress/nprogress.css';
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import NProgress from 'nprogress';
import AppLayout from 'src/components/AppLayout';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
