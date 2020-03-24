import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setLoading } from '../redux/actions';

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  if (!posts.length) {
    return (
      <button
        className='btn btn-primary'
        onClick={() => dispatch(fetchPosts(), setLoading())}
      >
        Загрузить
      </button>
    );
  }
  if (loading) {
    return <h1>Загрузка...</h1>;
  } else {
    return posts.map(post => <Post post={post} key={post.id} />);
  }
};

export default FetchedPosts;
