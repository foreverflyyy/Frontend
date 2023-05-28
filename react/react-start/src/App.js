import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

export default function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'javascript', description: 'Hello' },
    { id: 2, title: 'c#', description: 'good' },
    { id: 3, title: 'python', description: 'fine' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

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
    setModalVisible(false);
  }

  const removePost = (removedPost) => {
    setPosts(posts.filter(post => post.id !== removedPost.id));
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModalVisible(true)}>
        Create post
      </MyButton>
      <MyModal visible={modalVisible} setVisible={(value) => setModalVisible(value)}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List posts:' />
    </div>
  );
}
