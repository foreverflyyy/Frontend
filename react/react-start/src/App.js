import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

export default function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'javascript', description: 'Hello' },
    { id: 2, title: 'c#', description: 'good' },
    { id: 3, title: 'python', description: 'fine' },
  ]);

  const [filter, setFilter] = useState({
    query: '',
    sort: '',
  });

  const sortedPosts = useMemo(() => {
    if (filter.sort)
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (removedPost) => {
    setPosts(posts.filter(post => post.id !== removedPost.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }}></hr>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List posts:' />
    </div>
  );
}
