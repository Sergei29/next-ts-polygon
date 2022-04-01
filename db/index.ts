import { prisma } from '../prisma/prisma'
import { Note } from '../src/types'

export const getAllNotes = async () => await prisma.note.findMany()

export const getNoteById = async (id: string) =>
  await prisma.note.findUnique({
    where: { id },
  })

export const addNewNote = async (noteData: Note) =>
  await prisma.note.create({
    data: noteData,
  })

export const deleteNoteById = async (id: string) =>
  await prisma.note.delete({
    where: { id },
  })

export const updateNote = async ({ id, ...restNoteData }: Note) =>
  await prisma.note.update({
    where: { id },
    data: { ...restNoteData },
  })
