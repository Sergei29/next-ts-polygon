/** @jsxImportSource theme-ui */
import type { NextPage, GetStaticProps } from 'next';
import Page from '../src/containers/Page';

type Props = {
  content: {
    h1: string;
  };
};

const Home: NextPage<Props> = ({ content }) => {
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
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      content: {
        h1: 'This is a really dope note taking app.',
      },
    },
  };
};

export default Home;
