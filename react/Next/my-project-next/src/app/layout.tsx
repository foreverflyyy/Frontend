import '@styles/globals.css'
import React from 'react';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title: "Next App",
    description: "This my first seriously next app"
}

function RootLayout({children}: {children:React.ReactNode}) {
    return (
        <html lang={"en"}>
            <body>
                <Provider>
                    <div className={"main"}>
                        <div className={"gradient"}/>
                    </div>
                    <main className={"app"}>
                        <Nav/>
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
}

export default RootLayout;