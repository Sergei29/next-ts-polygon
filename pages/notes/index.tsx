import React from 'react';
import Navigation from '../../src/components/Navigation';
import NavLink from '../../src/components/NavLink';

const Notes = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));
  return (
    <div>
      <h1>Notes index path</h1>
      <Navigation />
      <ul>
        {notes.map(({ id, title }) => (
          <li key={id}>
            <NavLink href='/notes/[id]' as={`notes/${id}`}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
