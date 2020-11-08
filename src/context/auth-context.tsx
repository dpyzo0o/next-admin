import * as React from 'react';
import { useQuery } from 'react-query';
import { FullScreenSpinner } from 'src/components/FullScreenSpinner';

interface User {
  id: number;
  name: string;
}

interface AuthState {
  user: User;
  login: () => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthState | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

function AuthProvider({ children }: React.PropsWithChildren<unknown>) {
  const { data: user, isLoading, isError, error } = useQuery<User>('user', () =>
    fetch('/api/user').then(res => res.json())
  );

  const login = React.useCallback(() => {
    console.log('login');
  }, []);

  const logout = React.useCallback(() => {
    console.log('logout');
  }, []);

  const value = React.useMemo(() => ({ user, login, logout } as AuthState), [login, logout, user]);

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  if (isLoading) {
    return <FullScreenSpinner />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth(): AuthState {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
}

export { AuthProvider, useAuth };
