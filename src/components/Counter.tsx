import React from 'react';
import { Button } from 'antd';
import styles from './Counter.less';

function Counter(): JSX.Element {
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.container}>
      <div>{count}</div>
      <div>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          +
        </Button>
        <Button type="primary" ghost onClick={() => setCount(count - 1)}>
          -
        </Button>
      </div>
    </div>
  );
}

export default Counter;
