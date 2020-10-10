import React from 'react';
import { Spin } from 'antd';
import { useRouter } from 'next/router';
import { useUser } from 'src/utils/auth';

export function withAuthentication<P = any>(WrappedComponent: React.ComponentType<P>) {
  const AuthedComponent: React.FC<P> = props => {
    const router = useRouter();
    const [user, loading] = useUser();

    React.useEffect(() => {
      if (loading) {
        return;
      }

      if (!user) {
        setTimeout(() => router.push('/login'), 300);
      }
    }, [loading, router, user]);

    if (loading || !user) {
      return (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin size="large" />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  AuthedComponent.displayName = `WithAuthentication(${getDisplayName(WrappedComponent)})`;

  return AuthedComponent;
}

function getDisplayName(WrappedComponent: React.ComponentType<any>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
