import { PromiseReturnType } from './utils/typeHelpers';

interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
}

export type InitialState = PromiseReturnType<typeof getInitialState>;

async function getInitialState() {
  const res = await fetch('/api/user');
  const json: User = await res.json();
  return {
    user: json,
  };
}

export { getInitialState };
