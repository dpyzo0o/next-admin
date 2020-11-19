import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { Store } from 'antd/lib/form/interface';
import http from 'src/utils/http';
import { useInitialState } from 'src/context/InitialStateContext';

function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { setInitialState } = useInitialState();

  const [loading, setLoading] = React.useState(false);

  const handleFinish = async (values: Store) => {
    try {
      setLoading(true);
      const { data } = await http.post('/api/login', values);
      setInitialState({
        isLoggedIn: true,
        user: data.data,
      });

      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      message.error(error.response.data.message || '请求失败');
    }
  };

  return (
    <div
      css={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        css={{
          width: 360,
          padding: 32,
          backgroundColor: '#ffffff',
          boxShadow: '0px 6px 20px 0px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0, 0, 0, 0.15)',
          borderRadius: 4,
        }}
      >
        <h2 css={{ width: '100%', marginBottom: 20, textAlign: 'center' }}>Next Admin</h2>
        <Form
          form={form}
          name="login"
          css={{ maxWidth: 320, margin: 'auto' }}
          onFinish={handleFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input username',
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input password',
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item noStyle>
            <Button type="primary" htmlType="submit" css={{ width: '100%' }} loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
