"use client"

import React, {useState} from 'react';
import Form from "@components/Form";
import {IPost} from "@models/IPost";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const CreatePrompt = () => {

    const router = useRouter();
    const {data: session} = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState<IPost>({
        prompt: '',
        tag: ''
    });

    const createPrompt = async (e: any) => {
        e.preventDefault();
        setSubmitting(true);

        try{
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user,
                    tag: post.tag
                })
            })

            if(response.ok)
                router.push('/')

        } catch(e: any){
            console.log(e?.message);
        }
    }

    return (
        <div>

            <Form
                type={"Create"}
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt}
            />
        </div>
    );
};

export default CreatePrompt;