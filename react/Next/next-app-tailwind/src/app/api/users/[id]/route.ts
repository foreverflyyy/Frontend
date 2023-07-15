import {NextResponse} from "next/server";
import {cookies, headers} from "next/headers";


export async function POST(req: Request, {params}: { params: { id: string } }) {
    const id = params.id;

    // redirect('/authorization')

    const headerList = headers();
    const type = headerList.get('Content-Type');

    const cookieList = cookies();
    const cook2 = cookieList.get('Cookie_1')?.value;

    return NextResponse.json({id, type, cook2});
}