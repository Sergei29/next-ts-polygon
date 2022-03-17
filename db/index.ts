import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { Note } from '../src/types'

const PATH_TO_NOTES = '/notes'

export const db = new JsonDB(new Config('myDB', true, false, '/'))

export const getAllNotes = (): Note[] => db.getData(PATH_TO_NOTES)

export const saveNotes = (notes: Note[]) => {
  db.push(PATH_TO_NOTES, notes)
  db.reload()
}

export const getNoteById = (id: string) =>
  getAllNotes().find((note) => note.id === id) || null

export const addNewNote = (newNote: Note) => {
  const currentNotes = db.getData(PATH_TO_NOTES) || []
  const updatedNotes = [...currentNotes, newNote]
  saveNotes(updatedNotes)
  return newNote
}

export const deleteNoteById = (id: string) => {
  const noteToDelete = getNoteById(id)
  if (!noteToDelete) {
    return null
  }
  const newNotesList = getAllNotes().filter((note) => note.id !== id)
  saveNotes(newNotesList)
  return id
}

export const updateNote = (updatedNote: Note): Note | null => {
  let response: Note | null = null

  const newNoteList = getAllNotes().map((currentNote) => {
    if (currentNote.id === updatedNote.id) {
      const { id, ...restCurrentNote } = currentNote
      const { id: incomingId, ...restUpdatedNote } = updatedNote
      const newNote = { id, ...restCurrentNote, ...restUpdatedNote }
      response = { ...newNote }
      return newNote
    }
    return currentNote
  })

  saveNotes(newNoteList)

  return response
}
