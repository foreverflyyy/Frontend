import React from 'react';
import IUser from "@/types/IUser";
import Link from "next/link";

interface UsersListProps {
    users: IUser[]
}

const UsersList = ({users}: UsersListProps) => {
    return (
        <div>
            {users.map((user: IUser) => (
                <Link href={`users/${user.id}`}>{user.id}. {user.username}</Link>
            ))}
        </div>
    );
};

export default UsersList;