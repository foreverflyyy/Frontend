import {connectToDB} from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req: Request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), {status: 201})
    } catch(e: any) {
        return new Response("Something happened wrong...", {status: 500})
    }
}