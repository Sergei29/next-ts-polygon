import React from 'react';
import { useRouter } from 'next/router';
import Navigation from '../../src/components/Navigation';

const Note = () => {
  const {
    query: { id },
    push,
  } = useRouter();

  const intId = !!id ? +id : 0;
  const intNoteId = 3 === intId ? 5 : 3;

  return (
    <>
      <Navigation />

      <h1>Note: {id}</h1>
      <div>
        <button onClick={() => push('/')}>go Home</button>
        <button onClick={() => push('/notes/[id]', `/notes/${intNoteId}`)}>
          Note {intNoteId}
        </button>
      </div>
    </>
  );
};

export default Note;
