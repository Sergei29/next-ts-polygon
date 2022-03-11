/** @jsxImportSource theme-ui */
import React from 'react';
import { navLinks } from '../../constants';
import NavLink from '../NavLink';

const Navigation = () => (
  <nav sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
    {navLinks.map(({ id, path, name }) => (
      <NavLink key={id} href={path}>
        {name}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
