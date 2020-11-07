import { Spin } from 'antd';

function FullScreenSpinner() {
  return (
    <div
      css={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin size="large" />
    </div>
  );
}

export { FullScreenSpinner };
