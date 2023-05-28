import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

export default function App() {

  const [posts, setPosts] = useState([
      { id: 1, title: 'javascript', description: 'Hello'},
      { id: 2, title: 'javascript', description: 'Hello'},
      { id: 3, title: 'javascript', description: 'Hello'},
  ]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    //setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <form>
        
        <MyInput 
          type='text' 
          placeholder='Title' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)
        }/>
        <MyInput 
          type='text' 
          placeholder='Description' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)
        }/>

        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title='List posts:'/>
    </div>
  );
}
