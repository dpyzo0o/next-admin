import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import { FullScreenSpinner } from './components/FullScreenSpinner';
import { getRenderRoutes, routes } from './routes';

function App() {
  const renderRoutes = getRenderRoutes(routes);
  return (
    <React.Suspense fallback={<FullScreenSpinner />}>{useRoutes(renderRoutes)}</React.Suspense>
  );
}

export default App;
