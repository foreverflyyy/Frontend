import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

export default function App() {

  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState({query: '', sort: ''});
  const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  }

  const removePost = (removedPost) => {
    setPosts(posts.filter(post => post.id !== removedPost.id));
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModalVisible(true)}>
        Create post
      </MyButton>
      <MyModal visible={modalVisible} setVisible={(value) => setModalVisible(value)}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List posts:' />
    </div>
  );
}
