import React from 'react'
import { GetServerSideProps } from 'next'
import { GET_NOTE_BY_ID } from '../../src/apollo/queries'
import { apolloClient } from '../../src/apollo/apolloClient'
import { Note } from '../../src/types'
import Page from '../../src/containers/Page'

type Props = {
  data:
    | {
        getNoteById: Note
      }
    | undefined
  errorMessage: null | string
}

const Note = ({ data, errorMessage }: Props) => {
  const renderResults = () => {
    if (errorMessage) return <p>Error: {errorMessage}</p>
    if (!data?.getNoteById) return <p>no note</p>
    const { title, description } = data.getNoteById
    return (
      <div>
        <h1 sx={{ fontSize: 8, my: 0, textAlign: 'center' }}>{title}</h1>
        <p>{description}</p>
      </div>
    )
  }

  return <Page>{renderResults()}</Page>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx

  const { data, error } = await apolloClient.query({
    query: GET_NOTE_BY_ID,
    variables: { id: query.id },
  })

  return {
    props: { data, errorMessage: error?.message || null },
  }
}

export default Note
