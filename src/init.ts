interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
}

export interface InitialState {
  user: User;
}

async function getInitialState(): Promise<InitialState> {
  const res = await fetch('/api/user');
  const json = await res.json();
  return {
    user: json,
  };
}

export { getInitialState };
