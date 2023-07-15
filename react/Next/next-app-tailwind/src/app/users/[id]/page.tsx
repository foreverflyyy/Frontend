import React from 'react';
import {Metadata} from "next";
import {getUsersBySearch} from "@/services/getUsers";

interface SectionUserProps {
    params: {
        name: string;
    }
}

export default async function SectionUser({params: { name }}: SectionUserProps) {
    const user = await getUsersBySearch(name);

    return (
        <>
            <div>{user.username}</div>
        </>
    );
}