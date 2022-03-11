import React from 'react';
import Link, { LinkProps } from 'next/link';

const NavLink: React.FC<LinkProps> = ({ children, ...restLinkProps }) => (
  <Link {...restLinkProps}>
    <a>{children}</a>
  </Link>
);

export default NavLink;
