import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await jwt.getToken({
    req,
    secret,
    encryption: true,
  });
  res.status(200).json(token);
}
