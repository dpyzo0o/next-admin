import * as React from 'react';
import { Outlet, Link, useRoutes, useLocation } from 'react-router-dom';
import { FullPageSpinner } from './components/FullPageSpinner';
import { EmotionDemo } from './views/EmotionDemo';

function Home() {
  return (
    <div css={{ padding: '2em' }}>
      <h1>Welcome to the app!</h1>
      <nav>
        <ul>
          <li>
            <Link to="invoices">Invoices</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="spin">Fullpage Spinner</Link>
          </li>
          <li>
            <Link to="emotion">Emotion Demo</Link>
          </li>
        </ul>
      </nav>
      <div css={{ padding: '2em', border: '2px solid red' }}>
        <Outlet />
      </div>
    </div>
  );
}

function Invoices() {
  return <h1>Invoices</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function NotFound() {
  return <h1>Not Found</h1>;
}

function App() {
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, [location]);

  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'invoices',
          element: <Invoices />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
      ],
    },
    {
      path: '/spin',
      element: <FullPageSpinner />,
    },
    {
      path: '/emotion',
      element: <EmotionDemo />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return element;
}

export default App;
