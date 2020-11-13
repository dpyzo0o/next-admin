import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';
import { InitialStateProvider } from './InitialStateContext';
import { AccessProvider } from './AccessContext';

const reactQueryConfig: ReactQueryConfig = {
  queries: {
    refetchOnWindowFocus: false,
  },
};

function AppProviders({ children }: React.PropsWithChildren<unknown>) {
  return (
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <Router>
        <InitialStateProvider>
          <AccessProvider>{children}</AccessProvider>
        </InitialStateProvider>
      </Router>
    </ReactQueryConfigProvider>
  );
}

export { AppProviders };
