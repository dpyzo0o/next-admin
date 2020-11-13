/**
 * This page acts as a SPA.
 * You can treat it as equivalent to src/index.js in create-react-app
 */

import * as React from 'react';
import App from 'src/App';
import { AppProviders } from 'src/context';
import { isServer } from 'src/utils/misc';

if (process.env.NODE_ENV === 'development' && !isServer()) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('../mocks/browser');
  worker.start();
}

function SafeHydrate({ children }: { children: React.ReactNode }) {
  return (
    <div id="__next-admin" suppressHydrationWarning>
      {isServer() ? null : children}
    </div>
  );
}

function Index() {
  return (
    <SafeHydrate>
      <AppProviders>
        <App />
      </AppProviders>
    </SafeHydrate>
  );
}

export default Index;
