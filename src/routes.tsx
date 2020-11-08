import * as React from 'react';
import { PartialRouteObject } from 'react-router';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import EmotionDemo from './views/EmotionDemo';
import NotFound from './views/NotFound';
import { FullScreenSpinner } from './components/FullScreenSpinner';
import { Layout } from './components/Layout';

const routes: PartialRouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'emotion',
        element: <EmotionDemo />,
      },
    ],
  },
  {
    path: 'spin',
    element: <FullScreenSpinner />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export { routes };
