import React from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { Button } from 'theme-ui'
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
  const router = useRouter()
  const renderResults = () => {
    if (errorMessage) return <p>Error: {errorMessage}</p>
    if (!!data && data.getNotes.length === 0) return <p>no notes</p>
    return data!.getNotes.map((note) => (
      <Button
        key={note.id}
        onClick={() => router.push(`notes/${note.id}`)}
        sx={{ cursor: 'pointer', fontSize: 22, fontWeight: 800 }}
        bg="secondary"
      >
        {note.title}
      </Button>
    ))
  }
  return (
    <Page>
      <h1 sx={{ fontSize: 8, my: 0 }}>Notes</h1>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {renderResults()}
      </div>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data, error } = await apolloClient.query({
    query: GET_ALL_NOTES,
  })

  return {
    props: { data, errorMessage: error?.message || null },
  }
}

export default Notes
