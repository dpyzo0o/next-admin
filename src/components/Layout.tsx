import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div css={{ padding: '2em' }}>
      <h1>Welcome to the app!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="emotion">Emotion Demo</Link>
          </li>
          <li>
            <Link to="spin">Fullpage Spinner</Link>
          </li>
        </ul>
      </nav>
      <div css={{ padding: '2em', border: '2px solid red' }}>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
