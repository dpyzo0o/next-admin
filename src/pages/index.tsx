import React from 'react';
import { useUser } from 'src/utils/auth';
import styles from './index.less';

function Index() {
  const [user] = useUser();

  return (
    <div className={styles.container}>
      <h1>
        Welcome to <a href="https://github.com/dpyzo0o/next-admin">Next Admin!</a>
      </h1>

      <p className={styles.highlight}>
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <div>
        <pre>{JSON.stringify(user)}</pre>
      </div>
    </div>
  );
}

Index.layout = React.Fragment;

export default Index;
