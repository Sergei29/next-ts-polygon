import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  input NoteData {
    title: String!
  }
  input NoteDataExisting {
    id: ID!
    title: String
  }

  type Note {
    id: ID!
    title: String
  }

  type Query {
    getNotes: [Note]
    getNoteById(id: ID!): Note
  }

  type Mutation {
    addNote(note: NoteData!): Note
    deleteNoteById(id: ID!): ID
    updateNote(note: NoteDataExisting!): Note
  }
`
