import {users} from "@/app/api/users/users";
import {NextResponse} from "next/server";


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const query = searchParams.get('q');

    let currentUsers = users;

    if(query) {
        currentUsers = users.filter(post => post.name.toLowerCase().includes(query.toLowerCase()));
    }

    return NextResponse.json(currentUsers);
}