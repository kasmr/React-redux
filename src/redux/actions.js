import { CREATE_POST, FETCH_POST, SHOW_LOADER, HIDE_LOADER } from './types';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

export function showLoading() {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoading() {
  return {
    type: HIDE_LOADER
  };
}

export function fetchPosts() {
  return async dispatch => {
    dispatch(showLoading());
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    const json = await response.json();
    dispatch({ type: FETCH_POST, payload: json });
    dispatch(hideLoading());
  };
}
