import * as React from 'react';
import { AppProps } from 'next/app';
import { Global, css } from '@emotion/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body {
            width: 100%;
            height: 100%;
          }
        `}
      />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
