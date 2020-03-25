import { CREATE_POST } from './types';
import { showAlert } from './actions';

const words = ['fuck', 'php', 'spam'];

export function forbiddenWords({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = words.filter(w => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(showAlert('Не спамьте пожалуйста...'));
        }
      }
      return next(action);
    };
  };
}
