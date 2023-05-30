import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../components/API/PostService";
import MyLoader from "../components/UI/Loader/MyLoader";

export const PostIdPage = () => {
  
  const params = useParams();
  const [post, setPost] = useState({});
  const[comments, setComments] = useState([]);

  const [fetchPostById, isLoadingPost, errorPost] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });
  
  const [fetchComment, isLoadingComment, errorComment] = useFetching(async (id) => {
    const response = await PostService.getComments(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComment(params.id);
  }, []);

  return (
    <div>
        <h1>You open the page of post number with ID: {params.id}</h1>
        {isLoadingPost 
        ? <MyLoader/>
        : <div>{post.id}. {post.title}</div>
        }
        {isLoadingComment
        ? <MyLoader/>
        : 
        <div> {comments.map(comment =>
            <div key={comment.id} style={{marginTop: 15}}>
              <h5>{comment.email}. </h5> <div>{comment.body}</div>
            </div>)}
        </div>
        }
    </div>
  );
};
