import React from 'react';
import { Layout } from 'antd';
import styles from './AppLayout.less';

interface LayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: LayoutProps) {
  return <Layout className={styles.layout}>{children}</Layout>;
}

export default AppLayout;
