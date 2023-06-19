'use client'
import React, {FormEventHandler, useState} from 'react';
import IUser from "@/types/IUser";
import {getUsersBySearch} from "@/services/getUsers";

interface SearchUserProps {
    searchUsers: (searchedUsers: IUser[]) => void;
}

const SearchUsers = ({searchUsers}: SearchUserProps) => {

    const [search, setSearch] = useState('');

    const handlerSearchPosts: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const users: IUser[] = await getUsersBySearch(search);
        searchUsers(users);
    }

    return (
        <form onClick={handlerSearchPosts}>
            <input
                type={"text"}
                placeholder={"search"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type={"submit"}></button>
        </form>
    );
};

export default SearchUsers;