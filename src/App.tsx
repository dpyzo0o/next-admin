import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import { FullScreenSpinner } from './components/FullScreenSpinner';
import { routes } from './routes';

function App() {
  return <React.Suspense fallback={<FullScreenSpinner />}>{useRoutes(routes)}</React.Suspense>;
}

export default App;
