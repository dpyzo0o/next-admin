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

export function isProtectedRoute(pathname: string) {
  const publicRoutes = ['/', '/login'];
  return !publicRoutes.includes(pathname);
}
