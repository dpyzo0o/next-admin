import React from 'react';
import { Button, Layout, Menu, Spin } from 'antd';
import {
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/client';
import { useUser } from 'src/utils/auth';
import styles from './AppLayout.less';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();
  const [user, loading] = useUser();
  const [collapsed, { toggle: toggleCollapsed }] = useBoolean(false);

  const { pathname } = router;

  React.useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      setTimeout(() => router.push('/login'), 300);
    }
  }, [loading, router, user]);

  if (loading || !user) {
    return (
      <div className={styles.spinner}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }} hasSider>
      <Sider className={styles.sider} width={220} trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          defaultOpenKeys={['/account']}
          onClick={({ key }) => router.push(key.toString())}
        >
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/notification" icon={<NotificationOutlined />}>
            Notification
          </Menu.Item>
          <Menu.Item key="/result" icon={<CheckCircleOutlined />}>
            Result
          </Menu.Item>
          <SubMenu key="/account" icon={<UserOutlined />} title="Account">
            <Menu.Item key="/account/center">Account Center</Menu.Item>
            <Menu.Item key="/account/settings">Account Settings</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 220, transition: 'all .2s' }}>
        <Header className={styles.header}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: () => toggleCollapsed(),
          })}
          <div>
            {user ? (
              <React.Fragment>
                <span style={{ marginRight: 16 }}>{user.username}</span>
                <Button type="primary" onClick={signOut}>
                  Logout
                </Button>
              </React.Fragment>
            ) : (
              <Button type="primary" onClick={() => router.push('/login')}>
                Login
              </Button>
            )}
          </div>
        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer className={styles.footer}>
          Next Admin ©2020 Created by{' '}
          <a href="https://github.com/dpyzo0o" target="_blank" rel="noopener noreferrer">
            dpyzo0o
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
