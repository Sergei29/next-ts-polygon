import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Note {
    id: ID!
    title: String
  }

  type Query {
    getNotes: [Note]
    getNoteById(id: ID!): Note
  }
`
