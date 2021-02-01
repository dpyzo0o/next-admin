import * as React from 'react';
import { AppProviders } from 'src/context';
import App from 'src/App';

function AppEntry() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AppProviders>
      <App />
    </AppProviders>
  );
}

export default AppEntry;
