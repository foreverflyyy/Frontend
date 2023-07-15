"use client"

import React, {useEffect, useState} from 'react';
import {IResponsePost} from "@models/IPost";
import PromptCard from "@components/PromptCard";

const PromptCardList = ({data, handlerTag}: {
    data: IResponsePost[],
    handlerTag: (value: string) => void
}) => {
    return (
        <div className={"mt-16 prompt_layout"}>
            {data?.map((post: IResponsePost) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handlerTag}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState();
    const [posts, setPosts] = useState<IResponsePost[]>([]);

    const handlerSearchChange = (e: any) => {

    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();

            setPosts(data);
        }

        fetchPosts();
    }, [])

    return (
        <section className={"feed"}>
            <form className={"relative w-full flex-center"}>
                <input
                    type={"text"}
                    placeholder={"Search for a tag or a username"}
                    value={searchText}
                    onChange={handlerSearchChange}
                    required
                    className={"search_input peer"}
                />
            </form>

            <PromptCardList
                data={posts}
                handlerTag={(value: string) => {}}
            />
        </section>
    );
};

export default Feed;