import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';
import { AuthProvider } from './auth-context';

const reactQueryConfig: ReactQueryConfig = {
  queries: {
    refetchOnWindowFocus: false,
  },
};

function AppProviders({ children }: React.PropsWithChildren<unknown>) {
  return (
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <Router>
        <AuthProvider>{children}</AuthProvider>
      </Router>
    </ReactQueryConfigProvider>
  );
}

export { AppProviders };
