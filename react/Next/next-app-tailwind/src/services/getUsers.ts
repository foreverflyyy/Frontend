export const getAllUsers = async () => {
    const response = await fetch('api/users');

    if(!response.ok)
        throw new Error("Unable to fetch users.")

    return response.json();
}

export const getUsersBySearch = async (search: string) => {
    const response = await fetch(`api/users?q=${search}`);

    if(!response.ok)
        throw new Error("Unable to fetch users.")

    return response.json();
}