import { combineReducers, Reducer } from 'redux';
import images from './images';
import auth from './auth';
import { AppState } from './types';

const reducer: Reducer<AppState> = combineReducers<AppState>({
  images,
  auth
});

export default reducer;
export * from './types';
