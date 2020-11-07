import * as React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, [location]);

  return useRoutes(routes);
}

export default App;
