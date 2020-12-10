import * as React from 'react';
import { useQuery } from 'react-query';
import { Button } from 'antd';
import shallow from 'zustand/shallow';
import { useInitialState } from 'src/context/InitialStateContext';
import { useCounterStore } from 'src/zustand';
import { http } from 'src/utils/http';

function Dashboard() {
  const { data: appInfo } = useQuery('app-info', () =>
    http.get('/api/app-info').then(res => res.data)
  );
  const { initialState } = useInitialState();
  const { user } = initialState;

  const [count, loading, increase, asyncIncrease] = useCounterStore(
    state => [state.count, state.loading, state.increase, state.asyncIncrease],
    shallow
  );

  return (
    <React.Fragment>
      <h1>Dashboard</h1>
      <code>{JSON.stringify(user)}</code>
      <br />
      <code>{JSON.stringify(appInfo)}</code>
      <div>
        Count: {count}
        <div>
          <Button onClick={() => increase(1)}>+</Button>
          <Button onClick={() => asyncIncrease(1)} loading={loading}>
            *+
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
