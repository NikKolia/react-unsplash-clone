import { connect } from 'react-redux';

import { getImages, getIsLoading, getPhotos, getTotalItems, getTotalPages, getCurrentPage, pagImages } from '../store/images';
import { AppState } from '../store';
import { Grid } from '../components/grid';
import { Image } from '../types/imagesApi';

export interface IGridOwnProps {}

export interface IGridStateProps {
  images: Array<Image>;
  isLoading: boolean;
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface IGridDispatchProps {}

type Props = IGridStateProps & IGridDispatchProps & IGridOwnProps

const dispatchToProps = (dispatch: any) => {
  return {
    getPhotos: () => dispatch(getPhotos()),
    pagImages: () => dispatch(pagImages())
  }
};

const mapStateToProps = (state: AppState): Props  => {
  return {
    images: getImages(state),
    isLoading: getIsLoading(state),
    total: getTotalItems(state),
    totalPages: getTotalPages(state),
    currentPage: getCurrentPage(state),
  };
};

const GridContainer = connect<IGridStateProps, IGridDispatchProps, IGridOwnProps>(mapStateToProps as any, dispatchToProps as any)(Grid);

export { GridContainer as Grid };
