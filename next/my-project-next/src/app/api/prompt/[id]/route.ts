import {connectToDB} from "@utils/database";
import Prompt from "@models/prompt";

export const PATCH = async (req: Request, {params: id}: {params: {id: string}}) => {
    const {prompt, tag} = await req.json();

    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(id);

        if(!existingPrompt)
            return new Response("Prompt not found", {status: 404})

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status: 200})
    } catch(e: any) {
        return new Response('Happened error', {status: 500});
    }
}