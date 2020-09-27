import { Form, Input, Button } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { signIn } from 'next-auth/client';
import styles from './login.less';

export default function Login() {
  const [form] = Form.useForm();

  const handleFinish = (values: Store) => {
    const { username, password } = values;
    signIn('credentials', {
      username,
      password,
      callbackUrl: 'http://localhost:3000',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles['form-wrapper']}>
        <h2 className={styles.title}>Next Admin</h2>
        <Form form={form} name="login" className={styles.form} onFinish={handleFinish}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input username' }]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input password' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item noStyle>
            <Button type="primary" htmlType="submit" className={styles['login-btn']}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
