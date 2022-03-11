/** @jsxImportSource theme-ui */
import React from 'react';
import { useRouter } from 'next/router';
import Page from '../../src/containers/Page';

const Note = () => {
  const {
    query: { id },
    push,
  } = useRouter();

  const intId = !!id ? +id : 0;
  const intNoteId = 3 === intId ? 5 : 3;

  return (
    <Page>
      <h1>Note: {id}</h1>
    </Page>
  );
};

export default Note;
