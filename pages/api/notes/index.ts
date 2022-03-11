// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';

type Data = { data: any };

const handler = nc<NextApiRequest, NextApiResponse<Data>>()
  .use(cors())
  .get((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      data: {
        message: 'GET ok',
        data: [],
      },
    });
  })
  .post((req, res) => {
    const { body } = req;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      data: {
        message: 'POST ok',
        data: body || {},
      },
    });
  });

export default handler;
