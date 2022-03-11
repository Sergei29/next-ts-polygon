/** @jsxImportSource theme-ui */
import React from 'react';
import { navLinks } from '../../constants';
import NavLink from '../NavLink';

const Navigation = () => (
  <nav
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      variant: 'containers.page',
      height: '100%',
    }}
  >
    {navLinks.map(({ id, path, name }) => (
      <NavLink key={id} href={path}>
        {name}
      </NavLink>
    ))}
    <a
      sx={{
        color: 'text',
        fontSize: 3,
        cursor: 'pointer',
      }}
      href={process.env.NEXT_PUBLIC_INFO_URL}
      target='_blank'
      rel='noreferrer'
    >
      Help
    </a>
  </nav>
);

export default Navigation;
