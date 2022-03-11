// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';

type Data = {
  greeting: string;
};

const handler = nc<NextApiRequest, NextApiResponse<Data>>()
  .use(cors())
  .get((req, res) => {
    res.status(200).json({ greeting: 'Hello World!' });
  });

export default handler;
