import React from 'react';
import { Layout, Menu } from 'antd';
import {
  NotificationOutlined,
  DashboardOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { useRouter } from 'next/router';
import styles from './AppLayout.less';
import AppHeader from './AppHeader';

const { SubMenu } = Menu;
const { Content, Sider, Footer } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();
  const [collapsed, { toggle: toggleCollapsed }] = useBoolean(false);

  const { pathname } = router;

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
        <AppHeader collapsed={collapsed} onCollapsed={() => toggleCollapsed()} />
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
