import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSession, Session } from 'next-iron-session';

type Handler = (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => void | Promise<void>;

export function withSession(handler: Handler) {
  return withIronSession(handler, {
    password: 'replace-me-with-a-super-strong-password',
    cookieName: 'dpyzo0o/next-admin',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
}
