import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function AppProviders({ children }: React.PropsWithChildren<unknown>) {
  return <Router>{children}</Router>;
}

export { AppProviders };
