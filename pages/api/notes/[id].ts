// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';

type Data = { data: any };

const handler = nc<NextApiRequest, NextApiResponse<Data>>()
  .use(cors())
  .get((req, res) => {
    const {
      query: { id },
    } = req;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      data: {
        message: 'GET ok',
        data: `GET Item ID: ${id}`,
      },
    });
  })
  .patch((req, res) => {
    const { body } = req;
    const {
      query: { id },
    } = req;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      data: {
        message: 'POST ok',
        data: `PATCH Item ID: ${id}`,
      },
    });
  })
  .delete((req, res) => {
    const { body } = req;
    const {
      query: { id },
    } = req;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      data: {
        message: 'POST ok',
        data: `DELETE Item ID: ${id}`,
      },
    });
  });

export default handler;
