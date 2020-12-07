import * as React from 'react';
import { PartialRouteObject } from 'react-router';
import { Navigate, Outlet } from 'react-router-dom';
import {
  NotificationOutlined,
  DashboardOutlined,
  UserOutlined,
  CheckCircleOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import { Access } from './access';
import { assert } from './utils/misc';

/**
 * Import components which do not need lazy-loading, usuarally
 * there are components required by initializing app
 */
import { Layout } from './components/Layout';
import { Guard } from './components/Guard';

/**
 * Lazy-load components by routes
 */
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const EmotionDemo = React.lazy(() => import('./views/EmotionDemo'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const Login = React.lazy(() => import('./views/Login'));
const Notification = React.lazy(() => import('./views/Notification'));
const Result = React.lazy(() => import('./views/Result'));
const AccountCenter = React.lazy(() => import('./views/Account/AccountCenter'));
const AccountSettings = React.lazy(() => import('./views/Account/AccountSettings'));

/**
 * Extend react-router's config to allow menu auto-generation
 * and more fine-grained auth control
 */
export interface Route extends PartialRouteObject {
  /** auto generate menu if present */
  menu?: {
    title?: React.ReactNode;
    icon?: React.ReactNode;
  };
  /** whether has access to this route, will render 403 if not */
  access?: string;
  children?: Route[];
}

const routes: Route[] = [
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
        menu: {
          title: 'Dashboard',
          icon: <DashboardOutlined />,
        },
      },
      {
        path: 'emotion',
        element: <EmotionDemo />,
        menu: {
          title: 'Emotion',
          icon: <SkinOutlined />,
        },
      },
      {
        path: 'notification',
        element: <Notification />,
        menu: {
          title: 'Notification',
          icon: <NotificationOutlined />,
        },
      },
      {
        path: 'result',
        element: <Result />,
        menu: {
          title: 'Result',
          icon: <CheckCircleOutlined />,
        },
        access: 'canUser',
      },
      {
        path: 'account',
        element: <Outlet />,
        menu: {
          title: 'Account',
          icon: <UserOutlined />,
        },
        children: [
          {
            path: '/',
            element: <Navigate to="center" />,
          },
          {
            path: 'center',
            element: <AccountCenter />,
            menu: {
              title: 'Account Center',
            },
          },
          {
            path: 'settings',
            element: <AccountSettings />,
            menu: {
              title: 'Account Settings',
            },
          },
        ],
      },
      {
        path: 'page-test',
        element: <Outlet />,
        menu: {
          title: 'Test Page',
          icon: <UserOutlined />,
        },
        children: [
          {
            path: '/',
            element: <Navigate to="subpage1" />,
          },
          {
            path: 'subpage1',
            element: <div>subpage 1</div>,
            menu: {
              title: 'Sub Page 1',
            },
          },
          {
            path: 'subpage2',
            element: <div>subpage 2</div>,
            menu: {
              title: 'Sub Page 2',
            },
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

interface MenuItem {
  path: string;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

interface MenuConfig {
  defaultOpenKeys?: string[];
  menus: MenuItem[];
}

function getMenuConfig(access: Access): MenuConfig {
  const adminRoutes = routes[0].children;
  assert(adminRoutes);

  const getMenus = (routes: Route[], prefix = '/'): MenuItem[] => {
    return routes
      .filter(r => r.menu)
      .filter(r => !r.access || access[r.access])
      .map(r => {
        const path = prefix + r.path;

        const res: MenuItem = {
          path,
          ...r.menu,
        };

        if (r.children) {
          res.children = getMenus(r.children, path + '/');
        }

        return res;
      });
  };

  const config: MenuConfig = {
    defaultOpenKeys: ['/account', '/page-test'],
    menus: getMenus(adminRoutes),
  };

  return config;
}

function getRenderRoutes(routes: Route[]): PartialRouteObject[] {
  const renderRoutes = routes.map(r => {
    const { menu, access, ...rest } = r;

    if (access) {
      rest.element = <Guard accessKey={access}>{rest.element}</Guard>;
    }

    if (rest.children) {
      rest.children = getRenderRoutes(rest.children);
    }

    return rest;
  });

  return renderRoutes;
}

export { routes, publicRoutes, getMenuConfig, getRenderRoutes };
