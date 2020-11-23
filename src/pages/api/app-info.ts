import { NextApiRequest, NextApiResponse } from 'next';
import pkg from 'package.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: pkg.name,
    version: pkg.version,
  });
}
