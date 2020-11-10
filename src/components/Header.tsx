import * as React from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useAuth } from 'src/context/auth-context';
import { css } from '@emotion/core';
import { useNavigate } from 'react-router';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  collapsed: boolean;
  onCollapsed: () => void;
}

function Header({ collapsed, onCollapsed }: HeaderProps) {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <AntHeader
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        background-color: #fff;
        box-shadow: rgba(0, 21, 41, 0.08) 0px 1px 4px;
      `}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        style: {
          fontSize: 18,
          cursor: 'pointer',
          transition: 'color 0.3s',
        },
        onClick: onCollapsed,
      })}
      <div>
        <React.Fragment>
          <span style={{ marginRight: 16 }}>{user.name}</span>
          <Button type="primary" onClick={() => navigate('login')}>
            Logout
          </Button>
        </React.Fragment>
      </div>
    </AntHeader>
  );
}

export { Header };
