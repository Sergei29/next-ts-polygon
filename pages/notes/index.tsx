import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_NOTES } from '../../src/apollo/queries'
import { Note } from '../../src/types'
import Page from '../../src/containers/Page'

const Notes = () => {
  const { data, loading, error } = useQuery<{ getNotes: Note[] }>(GET_ALL_NOTES)

  const renderResults = () => {
    if (loading) return <p>Loading notes...</p>
    if (error) return <p>Error: {error.message}</p>
    if (!!data && data.getNotes.length === 0) return <p>no notes</p>
    return data!.getNotes.map((note) => (
      <div key={note.id}>
        <h3>{note.title}</h3>
      </div>
    ))
  }
  return (
    <Page>
      <h1 sx={{ fontSize: 8, my: 0 }}>Notes</h1>
      <div>{renderResults()}</div>
    </Page>
  )
}

export default Notes
