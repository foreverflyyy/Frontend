import Layout from "@/components/Layout";
import Link from "next/link";
import {NextPageContext} from "next";
import {useEffect, useState} from "react";

export interface IPost {
    id: number,
    title: string,
    author: string
}

interface PostsProps {
    responsePosts: IPost[]
}

Index.getInitialProps = async ({ req }: NextPageContext) => {
    if(!req)
        return {posts: null}

    console.log(process.env.API_URL)
    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts = await response.json();
    return {posts}
}

export default function Index({ responsePosts }: PostsProps) {
    const [posts, setPosts] = useState(responsePosts)

    useEffect(() => {
        async function load(){
            const response = await fetch(`${process.env.API_URL}/posts`)
            const data = await response.json();
            setPosts(data);
        }

        if(!posts)
            load();
    }, [])

    if(!posts)
        return <div>Loading...</div>

    return (
        <Layout>
            <h1>Page of posts!</h1>
            <div>
                {posts?.map(post =>
                    <Link key={post.id} href={`/posts/[id]`} as={`/posts/${post.id}`}>
                        <p>{post.id}. {post.title}</p>
                    </Link>
                )}
            </div>
        </Layout>
    )
}