import { Button, Result } from 'antd';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccess } from 'src/context/AccessContext';

interface GuardProps {
  accessKey: string;
}

function Guard({ accessKey, children }: React.PropsWithChildren<GuardProps>) {
  const access = useAccess();
  const navigate = useNavigate();

  if (!access[accessKey]) {
    return (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Back Home
          </Button>
        }
      />
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export { Guard };
