import * as React from 'react';
import { useQuery } from 'react-query';
import { useInitialState } from 'src/context/initial-state-context';

function Dashboard() {
  const { data: appInfo } = useQuery('app-info', () =>
    fetch('/api/app-info').then(res => res.json())
  );
  const { initialState } = useInitialState();
  const { user } = initialState;

  return (
    <React.Fragment>
      <h1>Dashboard</h1>
      <code>{JSON.stringify(user)}</code>
      <br />
      <code>{JSON.stringify(appInfo)}</code>
    </React.Fragment>
  );
}

export default Dashboard;
