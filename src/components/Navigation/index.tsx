import React from 'react';
import { navLinks } from '../../constants';
import NavLink from '../NavLink';

const Navigation = () => (
  <nav>
    {navLinks.map(({ id, path, name }) => (
      <NavLink key={id} href={path}>
        {name}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
