import {NextApiRequest, NextApiResponse} from "next";

interface MessageRequest extends NextApiRequest {
    query: {
        message?: string
    }
}

export default function echo(req: NextApiRequest, res: NextApiResponse){
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({
        message: req.query.message ?? 'Base message'
    }))

    //res.json({message: req.query.message})
}