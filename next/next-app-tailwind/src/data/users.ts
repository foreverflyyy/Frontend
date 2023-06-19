interface IUserAuth {
    id: string;
    email: string;
    name: string;
    password: string;
    role: string;
}

export const users: IUserAuth[] = [
    {
        id: "1",
        email: "nikita.ushakov.02@gmail.com",
        name: "Misha Nep",
        password: "12345",
        role: "admin",
    },
    {
        id: "2",
        email: "nikita.ushackow.02@gmail.com",
        name: "Super Admin",
        password: "12345",
        role: "admin",
    },
    {
        id: "3",
        email: "any@gmail.com",
        name: "Just a Guest",
        password: "12345",
        role: "guest",
    },
]