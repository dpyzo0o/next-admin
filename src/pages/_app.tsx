import * as React from 'react';
import { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import { isServer } from 'src/utils/misc';

if (process.env.NODE_ENV === 'development' && !isServer()) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('../mocks/browser');
  worker.start();
}

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
