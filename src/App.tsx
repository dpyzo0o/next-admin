import * as React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { FullScreenSpinner } from './components/FullScreenSpinner';
import { routes } from './routes';

function App() {
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, [location]);

  return <React.Suspense fallback={<FullScreenSpinner />}>{useRoutes(routes)}</React.Suspense>;
}

export default App;
