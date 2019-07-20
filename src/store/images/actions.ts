import { IMAGES_ACTION_TYPES, ImagesAction } from './types';
import { Dispatch } from 'redux';
import {fetchPhotos, searchItems, loadItems} from '../../services';

const loadingStart = () => (
  {
    type: IMAGES_ACTION_TYPES.LOADING,
    payload: { isLoading: true }
  }
);

const searchSucceed = (payload: any) => ({
  type: IMAGES_ACTION_TYPES.SEARCH_SUCCEED,
  payload
});

const searchError = () => (
  {
    type: IMAGES_ACTION_TYPES.SEARCH_ERROR,
  }
);
// Action creator
// sign in, nav
export const getItems = (payload: {value: string, page: number}): any => {
  return async (dispatch: Dispatch<ImagesAction>) => {
    dispatch(loadingStart());

    const response = await searchItems(payload);

    if (response) {
      dispatch(searchSucceed({...response, isLoading: false}));
    } else {
      dispatch(searchError());
    }
  }
};

// booting images
export const getPhotos= (): any => async (dispatch: Dispatch<ImagesAction>) =>{
  dispatch(loadingStart());
  const response = await fetchPhotos();

  if (response) {
    dispatch(searchSucceed({...response, isLoading: false}));
  } else {
    dispatch(searchError());
  }
};

// pagination
export const pagImages = (payload: {value: string, page: number}): any => {
  return async (dispatch: Dispatch<ImagesAction>) => {
    dispatch(loadingStart());
  const response = await loadItems(payload);

  if (response) {
    dispatch(searchSucceed({...response, isLoading: false}));
  } else {
    dispatch(searchError());
  }
}};
