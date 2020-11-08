import * as React from 'react';
import { useRequest } from 'ahooks';

function Home() {
  const { data: info } = useRequest(() => fetch('/api/app-info').then(res => res.json()), {
    cacheKey: 'app-info',
  });

  return (
    <React.Fragment>
      <h1>Home</h1>
      <code>{JSON.stringify(info)}</code>
    </React.Fragment>
  );
}

export default Home;
