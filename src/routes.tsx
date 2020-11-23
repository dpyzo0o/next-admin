import * as React from 'react';
import { PartialRouteObject } from 'react-router';
import { Navigate, Outlet } from 'react-router-dom';
import { Layout } from './components/Layout';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const EmotionDemo = React.lazy(() => import('./views/EmotionDemo'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const Login = React.lazy(() => import('./views/Login'));
const Notification = React.lazy(() => import('./views/Notification'));
const Result = React.lazy(() => import('./views/Result'));
const AccountCenter = React.lazy(() => import('./views/Account/AccountCenter'));
const AccountSettings = React.lazy(() => import('./views/Account/AccountSettings'));

const routes: PartialRouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'emotion',
        element: <EmotionDemo />,
      },
      {
        path: 'notification',
        element: <Notification />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: 'account',
        element: <Outlet />,
        children: [
          {
            path: '/',
            element: <Navigate to="center" />,
          },
          {
            path: 'center',
            element: <AccountCenter />,
          },
          {
            path: 'settings',
            element: <AccountSettings />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const publicRoutes = ['/login'];

export { routes, publicRoutes };
