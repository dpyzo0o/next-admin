import Counter from 'src/components/Counter';
import styles from './index.module.less';

export default function Index(): JSX.Element {
  return (
    <div className={styles.container}>
      <main>
        <h1>
          Welcome to <a href="https://github.com/dpyzo0o/next-admin">Next Admin!</a>
        </h1>

        <p className={styles.highlight}>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <Counter />
      </main>
    </div>
  );
}
