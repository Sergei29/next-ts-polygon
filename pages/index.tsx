import type { NextPage, GetStaticProps } from 'next';
import Navigation from '../src/components/Navigation';

type Props = {
  content: {
    main: string;
    footer: string;
  };
};

const Home: NextPage<Props> = ({ content }) => {
  return (
    <>
      <Navigation />
      <div>{content.main}</div>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      content: {
        main: 'main content',
        footer: 'footer content',
      },
    },
  };
};

export default Home;
