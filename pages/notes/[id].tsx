import React from 'react'
import { useRouter } from 'next/router'
import Page from '../../src/containers/Page'

const Note = () => {
  const { query } = useRouter()
  return (
    <Page>
      <h1 sx={{ fontSize: 8, my: 0, textAlign: 'center' }}>
        Note - {query.id}
      </h1>
    </Page>
  )
}

export default Note
