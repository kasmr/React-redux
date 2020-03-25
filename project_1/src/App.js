import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className='app'>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col'>
            <PostForm />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h2> Посты</h2>
            <Posts />
          </div>
          <div className='col'>
            <h2>Асинк Посты</h2>
            <FetchedPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
