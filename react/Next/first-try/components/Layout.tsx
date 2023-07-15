import React from 'react';
import Link from "next/link";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <nav>
                <Link href={'/posts'}>Posts</Link>
                <Link href={'/posts/2123'}>Posts_2</Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;