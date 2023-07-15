import { useEffect, useState } from 'react';
import '../styles/App.css';
import axios from 'axios';
import { IPostInfo } from '../components/PostItem';
import PostList from '../components/PostList'

export default function Posts() {

  const [posts, setPosts] = useState<IPostInfo[]>([]);

  const getPosts = async () => {
    const response = await axios.get<IPostInfo[]>('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: 10
      }
    });

    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>
      <PostList posts={posts}/>
    </div>
  )
}
