/** @jsxImportSource theme-ui */
import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Page from '../src/containers/Page'

type Props = {
  content: {
    h1: string
  }
}

const Home: NextPage<Props> = ({ content }) => {
  console.log(
    'hidden on browser, visible on server :>> ',
    process.env.SECRET_URL_SERVER_SIDE
  )
  console.log(
    'visible on browser, visible on server :>> ',
    process.env.NEXT_PUBLIC_INFO_URL
  )

  return (
    <Page>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>{content.h1}</h1>
      </div>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      content: {
        h1: 'This is a really dope note taking app.',
      },
    },
  }
}

export default Home
