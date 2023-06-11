import Head from "next/head";
import Layout from "@/components/Layout";
import {IPost} from "@/pages/posts/index";
import { NextPageContext } from 'next'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

interface PostProps {
    responsePost: IPost
}

Index.getInitialProps = async ({ query, req }: NextPageContext) => {
    if(!req)
        return {post: null}

    const response = await fetch(`${process.env.API_URL}/posts/${query.idPost}`)
    const post = await response.json();
    return { post }
}

export default function Index({responsePost}: PostProps) {

    const [post, setPost] = useState(responsePost);
    const router = useRouter();

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.idPost}`)
            const data = await response.json();
            setPost(data);
        }

        if(!post){
            load();
        }
    }, [])

    if(!post)
        return <div>Loading...</div>

    return (
        <>
            <Layout>
                <Head>
                    <title>Page of post</title>
                </Head>
                <h1>Page of  {post.id}</h1>
                <p>Title: {post.title}</p>
                <p>Author: {post.author}</p>
            </Layout>
        </>
    )
}