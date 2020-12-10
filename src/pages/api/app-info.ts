import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    name: 'next-admin',
    author: 'dpyzo0o',
  });
}
