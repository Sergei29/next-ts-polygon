import { useState, useEffect } from 'react'
import axios from 'axios'
import { Note, ApiResponse } from '../../types'

const NOTES_URL = '/api/notes'

export const useNotes = () => {
  const [data, setData] = useState<Note[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    let mounted = true
    const getNotes = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get<ApiResponse>(NOTES_URL)
        if (!!data.data && mounted) {
          setData(data.data as Note[])
          setError(null)
        }
        if (!!data.error && mounted) {
          setError(data.error.message)
        }
      } catch (error) {
        if (mounted) {
          setError('Failed to fetch notes')
        }
      } finally {
        setLoading(false)
      }
    }

    getNotes()

    return () => {
      mounted = false
    }
  }, [])

  return { data, loading, error }
}
