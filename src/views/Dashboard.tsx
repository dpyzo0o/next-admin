import * as React from 'react';
import { useAuth } from 'src/context/auth-context';

function Dashboard() {
  const { user } = useAuth();

  return (
    <React.Fragment>
      <h1>Dashboard</h1>
      <code>{JSON.stringify(user)}</code>
    </React.Fragment>
  );
}

export default Dashboard;
