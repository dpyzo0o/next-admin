import * as React from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { css, jsx } from '@emotion/react';
import { useNavigate } from 'react-router';
import { useInitialState } from 'src/context/InitialStateContext';
import { http } from 'src/utils/http';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  collapsed: boolean;
  onCollapsed: () => void;
}

function Header({ collapsed, onCollapsed }: HeaderProps) {
  const navigate = useNavigate();
  const { initialState, refetch } = useInitialState();
  const { user } = initialState;

  const handleLogout = async () => {
    try {
      // https://github.com/vvo/next-iron-session/issues/274
      await http.post('/api/logout');
      await refetch();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

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
      {jsx(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        css: {
          fontSize: 18,
          transition: 'color 0.3s',
        },
        onClick: onCollapsed,
      })}
      <div>
        <React.Fragment>
          <span style={{ marginRight: 16 }}>{user.name}</span>
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        </React.Fragment>
      </div>
    </AntHeader>
  );
}

export { Header };
