export interface IPost {
    prompt: string;
    tag: string;
}

export interface IResponsePost extends IPost {
    _id: string
    creator: any
}