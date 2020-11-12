import * as React from 'react';
import { getAccess } from 'src/access';
import { useInitialState } from './initial-state-context';

type AccessContextValue = ReturnType<typeof getAccess>;

const AccessContext = React.createContext<AccessContextValue | undefined>(undefined);
AccessContext.displayName = 'AccessContext';

function AccessProvider({ children }: React.PropsWithChildren<unknown>) {
  const { initialState } = useInitialState();
  const value = getAccess(initialState);

  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>;
}

function useAccess(): AccessContextValue {
  const context = React.useContext(AccessContext);

  if (context === undefined) {
    throw new Error(`useAccess must be used within a AccessProvider`);
  }

  return context;
}

export { AccessProvider, useAccess };
