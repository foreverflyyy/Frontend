import React, { useState, useEffect } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './components/API/PostService';
import MyLoader from './components/UI/Loader/MyLoader';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/pages';
import Pagination from './components/UI/pagination/Pagination';

export default function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ query: '', sort: '' });
  const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);
  const [modalVisible, setModalVisible] = useState(false);

  const [page, setPage] = useState(2);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [page])

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
      {postError && <h1>Произошла ошибка: {postError}</h1>}
      {isLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><MyLoader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List posts:' />
      }
      <Pagination totalPages={totalPages} page={page} changePage={p => setPage(p)}/>
    </div>
  );
}
