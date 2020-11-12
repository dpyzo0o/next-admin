import { NextApiRequest, NextApiResponse } from 'next';
import { delay } from 'src/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await delay(Math.floor(Math.random() * 1000));
  res.status(200).json({
    id: 1001,
    name: 'dpyzo0o',
    role: Math.random() > 0.5 ? 'admin' : 'user',
  });
}
