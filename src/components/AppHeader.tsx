import React from 'react';
import Router from 'next/router';
import { signOut } from 'next-auth/client';
import { Button, Layout } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useUser } from 'src/utils/auth';
import styles from './AppHeader.less';

const { Header } = Layout;

interface AppHeaderProps {
  collapsed: boolean;
  onCollapsed: () => void;
}

function AppHeader({ collapsed, onCollapsed }: AppHeaderProps) {
  const [user] = useUser();

  return (
    <Header className={styles.header}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuUnfoldOutlined, {
        className: styles.trigger,
        onClick: onCollapsed,
      })}
      <div>
        {user ? (
          <React.Fragment>
            <span style={{ marginRight: 16 }}>{user.username}</span>
            <Button
              type="primary"
              onClick={() => signOut({ callbackUrl: window.location.origin + '/login' })}
            >
              Logout
            </Button>
          </React.Fragment>
        ) : (
          <Button type="primary" onClick={() => Router.push('/login')}>
            Login
          </Button>
        )}
      </div>
    </Header>
  );
}

export default AppHeader;
