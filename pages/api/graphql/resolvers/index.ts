import { getAllNotes, getNoteById } from '../../../../db'

export const resolvers = {
  Query: {
    getNotes: () => getAllNotes(),
    getNoteById: (
      parent: Record<string, any>,
      args: Record<string, any>,
      context: Record<string, any>,
      info: Record<string, any>
    ) => {
      return getNoteById(args.id)
    },
  },
}
