import { NextApiRequest, NextApiResponse } from 'next';
import { delay } from 'src/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await delay(2000);
  res.status(200).json({
    id: 100,
    name: 'dpyzo0o',
  });
}
