export type Note = {
  id: string
  title: string
}

export type ErrorResponse = {
  message: string
  status: number
}

type ID = string

export type ApiResponse = { data?: Note[] | Note | ID; error?: ErrorResponse }
