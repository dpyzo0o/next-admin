import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSession } from 'next-iron-session';

type Handler = (
  req: NextApiRequest & { session: any },
  res: NextApiResponse
) => void | Promise<void>;

export function withSession(handler: Handler) {
  return withIronSession(handler, {
    password: 'replace-me-with-a-super-strong-password',
    cookieName: 'next-admin',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
}
