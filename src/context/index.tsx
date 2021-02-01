import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { InitialStateProvider } from './InitialStateContext';
import { AccessProvider } from './AccessContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function AppProviders({ children }: React.PropsWithChildren<unknown>) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <InitialStateProvider>
          <AccessProvider>{children}</AccessProvider>
        </InitialStateProvider>
      </Router>
    </QueryClientProvider>
  );
}

export { AppProviders };
