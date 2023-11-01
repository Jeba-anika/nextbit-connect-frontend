import Link from 'next/link';
import React from 'react';

type NavbarListItemProps={
    label: string,
    link: string
}

const NavbarListItem = ({label, link}: NavbarListItemProps) => {
    return (
        <Link
          className="hover:text-red-600"
          style={{ color: "black", marginRight: "10px", fontWeight: "bold" }}
          href={link}
        >
          {label}
        </Link>
    );
};

export default NavbarListItem;