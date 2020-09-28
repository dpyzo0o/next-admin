import { useSession } from 'next-auth/client';

interface User {
  id: number;
  username: string;
  password: string;
}

export function useUser(): [User | undefined, boolean] {
  const [session, loading] = useSession();
  return [session?.user, loading];
}
