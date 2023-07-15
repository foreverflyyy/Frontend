'use client'

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {signOut, useSession} from "next-auth/react";

interface NavLink {
    href: string,
    label: string
}

const navbarLinks: NavLink[] = [
    {href: '/', label: 'Home'},
    {href: '/users', label: 'Users'},
    {href: '/authorization/login', label: 'Login'},
    {href: '/authorization/registration', label: 'Registration'},
]

const Navbar = () => {

    const pathName = usePathname();
    const session = useSession();
    
    console.log(session)

    return (
        <div className={"w-full h-16 bg-slate-900 text-white p-2.5 mb-8"}>
            <div className={"container:sm mx-auto h-full flex items-center"}>
                <div className={'flex w-full justify-start'}>
                    My next app
                </div>
                <div  className={'flex justify-end'}>
                    {navbarLinks.map((link: NavLink) => {

                        const isActive = pathName === link.href

                        return (
                            <Link key={link.label} className={isActive ? 'ml-4 text-blue-700' : 'ml-4'} href={link.href}>
                                {link.label}
                            </Link>
                        )
                    })}
                    {session?.data && <Link href={'/profile'}>Profile</Link>}
                    {session?.data
                        ? <Link href='#' onClick={() => signOut({callbackUrl: "/"})}>Sign out</Link>
                        : <Link href={'/api/auth/signin'}>Sign in</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;