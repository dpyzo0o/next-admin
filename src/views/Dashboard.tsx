import * as React from 'react';
import { useQuery } from 'react-query';
import { useAuth } from 'src/context/auth-context';

function Dashboard() {
  const { user } = useAuth();
  const { data: appInfo } = useQuery('app-info', () =>
    fetch('/api/app-info').then(res => res.json())
  );

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
