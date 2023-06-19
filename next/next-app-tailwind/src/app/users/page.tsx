'use client'

import React, {useEffect, useState} from 'react';
import {getAllUsers} from "@/services/getUsers";
import UsersList from "@/components/Users";
import SearchUsers from "@/components/SearchUsers";
import IUser from "@/types/IUser";

export default async function Users() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllUsers()
            .then(setUsers)
            .finally(() => setIsLoading(false))
    }, [])

    if(isLoading)
        return <div>Loading...</div>

    const changeUsersBySearch = (searchedUsers: IUser[]) => {
        setUsers(searchedUsers);
    }

    return (
        <>
            <div>Users:</div>
            <SearchUsers searchUsers={changeUsersBySearch}/>
            <UsersList users={users}/>
        </>
    );
}