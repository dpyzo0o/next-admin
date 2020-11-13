import * as React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { Layout as AntLayout, Menu, Spin } from 'antd';
import {
  NotificationOutlined,
  DashboardOutlined,
  UserOutlined,
  CheckCircleOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { Header } from './Header';
import { Footer } from './Footer';

const { SubMenu } = Menu;
const { Content, Sider } = AntLayout;

function Layout() {
  const [collapsed, { toggle: toggleCollapsed }] = useBoolean(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <AntLayout css={{ minHeight: '100vh' }} hasSider>
      <Sider
        css={css`
          overflow: auto;
          height: 100vh;
          position: fixed;
          left: 0;
          box-shadow: rgba(0, 21, 41, 0.35) 2px 0px 4px;
        `}
        width={220}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          css={css`
            height: 32px;
            background: rgba(255, 255, 255, 0.2);
            margin: 16px;
          `}
        />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          defaultOpenKeys={['/account']}
          onClick={({ key }) => navigate(key.toString())}
        >
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/emotion" icon={<SkinOutlined />}>
            Emotion
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
      <AntLayout css={{ marginLeft: collapsed ? 80 : 220, transition: 'all .2s' }}>
        <Header collapsed={collapsed} onCollapsed={() => toggleCollapsed()} />
        <Content
          css={css`
            background-color: #fff;
            margin: 24px 16px 0;
            padding: 24px;
          `}
        >
          <React.Suspense
            fallback={
              <div
                css={css`
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <Spin spinning />
              </div>
            }
          >
            <Outlet />
          </React.Suspense>
        </Content>
        <Footer />
      </AntLayout>
    </AntLayout>
  );
}

export { Layout };
