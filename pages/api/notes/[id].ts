// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';
import { getNoteById, deleteNoteById, updateNote } from '../../../src/db';
import { Note, ApiResponse } from '../../../src/types';

const handler = nc<NextApiRequest, NextApiResponse<ApiResponse>>()
  .use(cors())
  .get((req, res) => {
    const {
      query: { id },
    } = req;
    const foundNote = getNoteById(id as string);

    if (!foundNote) {
      res.status(404);
      res.json({ error: { message: 'Not found', status: 404 } });
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      data: foundNote,
    });
  })
  .patch((req, res) => {
    const { body } = req;

    if (!body || !body?.id || !body?.title) {
      res.status(400);
      res.json({
        error: {
          message:
            'Note data missing. Expected example: {id: "e1b84c0c-2d8a-4df4" ,title: "my new note"}',
          status: 400,
        },
      });
      return;
    }
    const updatedNote = updateNote(body);

    if (!updatedNote) {
      res.status(404);
      res.json({ error: { message: 'Not found', status: 404 } });
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      data: updatedNote,
    });
  })
  .delete((req, res) => {
    const {
      query: { id },
    } = req;
    const deletedId = deleteNoteById(id as string);

    if (!deletedId) {
      res.status(404);
      res.json({ error: { message: 'Not found', status: 404 } });
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      data: deletedId,
    });
  });

export default handler;
