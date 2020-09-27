// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import pkg from 'package.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: pkg.name,
    version: pkg.version,
  });
}
