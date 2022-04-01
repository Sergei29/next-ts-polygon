import React from 'react'
import { GetServerSideProps } from 'next'
import { GET_ALL_NOTES } from '../../src/apollo/queries'
import { apolloClient } from '../../src/apollo/apolloClient'
import { Note } from '../../src/types'
import Page from '../../src/containers/Page'

type Props = {
  data:
    | {
        getNotes: Note[]
      }
    | undefined
  errorMessage: null | string
}
const Notes = ({ data, errorMessage }: Props) => {
  const renderResults = () => {
    if (errorMessage) return <p>Error: {errorMessage}</p>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data, error } = await apolloClient.query({
    query: GET_ALL_NOTES,
  })

  return {
    props: { data, error: error?.message || null },
  }
}

export default Notes
