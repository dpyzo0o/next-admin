import * as React from 'react';
import { FullScreenSpinner } from 'src/components/FullScreenSpinner';
import { InitialState, getInitialState } from 'src/initialState';

interface InitialStateContextValue {
  loading: boolean;
  error: any;
  initialState: InitialState;
  setInitialState: React.Dispatch<React.SetStateAction<InitialState>>;
  refetch: () => Promise<void>;
}

const InitialStateContext = React.createContext<InitialStateContextValue | undefined>(undefined);
InitialStateContext.displayName = 'InitialStateContext';

function InitialStateProvider({ children }: React.PropsWithChildren<unknown>) {
  const [loading, setLoading] = React.useState(true);
  const [state, setState] = React.useState<InitialState | undefined>();
  const [error, setError] = React.useState<any>();

  const run = React.useCallback(async () => {
    setLoading(true);
    try {
      setState(await getInitialState());
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    run();
  }, [run]);

  const value = React.useMemo(
    () =>
      ({
        initialState: state,
        setInitialState: setState,
        refetch: run,
        loading,
        error,
      } as InitialStateContextValue),
    [error, loading, run, state]
  );

  // show a full screen spinner before the initial state loaded
  if (loading && !state) {
    return <FullScreenSpinner />;
  }

  if (error) {
    return <div>Init project failed.</div>;
  }

  return <InitialStateContext.Provider value={value}>{children}</InitialStateContext.Provider>;
}

function useInitialState(): InitialStateContextValue {
  const context = React.useContext(InitialStateContext);

  if (context === undefined) {
    throw new Error(`useInitialState must be used within a InitialStateProvider`);
  }

  return context;
}

export { InitialStateProvider, useInitialState };
