import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Access, getAccess } from 'src/access';
import { setHttpClientHeaders } from 'src/utils/http';
import { useInitialState } from './InitialStateContext';
import { publicRoutes } from '../routes';

const AccessContext = React.createContext<Access | undefined>(undefined);
AccessContext.displayName = 'AccessContext';

function AccessProvider({ children }: React.PropsWithChildren<unknown>) {
  const { initialState } = useInitialState();
  const { pathname } = useLocation();

  if (publicRoutes.includes(pathname)) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  if (!initialState.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  setHttpClientHeaders({ userId: initialState.user.id });

  const value = getAccess(initialState);
  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>;
}

function useAccess(): Access {
  const context = React.useContext(AccessContext);

  if (context === undefined) {
    throw new Error(`useAccess must be used within a AccessProvider`);
  }

  return context;
}

export { AccessProvider, useAccess };
