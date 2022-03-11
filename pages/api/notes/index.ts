// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid'
import { getAllNotes, addNewNote } from '../../../src/db'
import { Note, ApiResponse } from '../../../src/types'

const handler = nc<NextApiRequest, NextApiResponse<ApiResponse>>()
  .use(cors())
  .get((req, res) => {
    const notes: Note[] = getAllNotes()

    if (!notes) {
      res.status(404)
      res.json({ error: { message: 'Not found', status: 404 } })
      return
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({
      data: notes,
    })
  })
  .post((req, res) => {
    const { body } = req

    if (!body || !body?.title) {
      res.status(400)
      res.json({
        error: {
          message: 'Note data missing. Expected example: {title: "my note"}',
          status: 400,
        },
      })
      return
    }

    const newNote: Note = { ...body, id: uuidv4() }
    const addedNote = addNewNote(newNote)

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({
      data: addedNote,
    })
  })

export default handler
