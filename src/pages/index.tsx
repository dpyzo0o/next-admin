import { Button } from 'antd';
import Router from 'next/router';
import { signOut, useSession } from 'next-auth/client';
import styles from './index.less';

export default function Index() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <h1>
        Welcome to <a href="https://github.com/dpyzo0o/next-admin">Next Admin!</a>
      </h1>

      <p className={styles.highlight}>
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <div>
        <Button type="primary" onClick={() => Router.push('/login')}>
          Login
        </Button>
        <Button type="primary" onClick={signOut}>
          Logout
        </Button>
      </div>

      <div>
        {loading && <span>session loading...</span>}
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </div>
  );
}
