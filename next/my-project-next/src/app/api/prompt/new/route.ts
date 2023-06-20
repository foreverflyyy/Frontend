import {connectToDB} from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req: Request) => {
    const {userId, prompt, tag} = await req.json();

    try {
        await connectToDB();

        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch(e: any) {
        return new Response("Something happened wrong", {status: 500});
    }
}