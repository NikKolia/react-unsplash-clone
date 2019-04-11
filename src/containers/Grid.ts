import { connect } from 'react-redux';

import { getImages, getIsLoading } from '../store/images';
import { AppState } from '../store';
import { Grid } from '../components/grid';
import { Image } from '../types/imagesApi';

export interface IGridOwnProps {}

export interface IGridStateProps {
  images: Array<Image>;
  isLoading: boolean;
}

export interface IGridDispatchProps {}

type Props = IGridStateProps & IGridDispatchProps & IGridOwnProps

const mapStateToProps = (state: AppState): Props  => {
  return {
    images: getImages(state),
    isLoading: getIsLoading(state),
  };
};

const GridContainer = connect<IGridStateProps, IGridDispatchProps, IGridOwnProps>(mapStateToProps as any)(Grid);

export { GridContainer as Grid };
