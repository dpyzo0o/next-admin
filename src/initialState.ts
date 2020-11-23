import { http } from 'src/utils/http';
import { PromiseReturnType } from './utils/typeHelpers';

interface User {
  id: number;
  name: string;
  age: number;
  role: string;
}

export type InitialState = PromiseReturnType<typeof getInitialState>;

async function getInitialState() {
  const { data } = await http.get<{ isLoggedIn: boolean; user: User }>('/api/user');
  return data;
}

export { getInitialState };
