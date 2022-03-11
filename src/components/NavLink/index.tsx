import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

const NavLink: React.FC<LinkProps> = ({ children, ...restLinkProps }) => {
  const { pathname } = useRouter();
  const isActive = pathname === restLinkProps.href;

  return (
    <Link {...restLinkProps}>
      <a sx={{ fontWeight: isActive ? 600 : 400 }}>{children}</a>
    </Link>
  );
};

export default NavLink;
