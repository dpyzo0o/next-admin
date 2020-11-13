import * as React from 'react';
import { Layout } from 'antd';
import { css } from '@emotion/react';

const { Footer: AntFooter } = Layout;

function Footer() {
  return (
    <AntFooter
      css={css`
        text-align: center;
        padding: 20px 50px;
      `}
    >
      Next Admin ©2020 Created by{' '}
      <a href="https://github.com/dpyzo0o" target="_blank" rel="noopener noreferrer">
        dpyzo0o
      </a>
    </AntFooter>
  );
}

export { Footer };
