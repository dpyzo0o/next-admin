import { NextApiRequest, NextApiResponse } from 'next';
import { sleep } from 'src/utils/misc';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await sleep(Math.floor(Math.random() * 1000));
  res.status(200).json({
    id: 1001,
    name: 'dpyzo0o',
    role: Math.random() > 0.5 ? 'admin' : 'user',
  });
}
