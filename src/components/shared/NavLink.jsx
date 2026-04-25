'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname() //for active buttons conditional rendering, it will get the name(e.g. about us, career)
    // console.log("Pathname", pathName)

    const isActive = href === pathName
    return (
        <Link href={href} className={`${isActive ? "border-b-2 border-b-red-400" : ""}`}>{children}</Link>
    );
};

export default NavLink