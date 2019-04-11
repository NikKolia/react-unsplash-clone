import Redux, { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Nav } from '../components/nav/Nav';
import { getItems } from '../store/images';
import { ImagesAction } from '../store/images/types';

interface IDispatchProps {
  onSearch: (value: string) => Dispatch<ImagesAction>;
}

const mapDispatchToProps = (dispatch: Dispatch<ImagesAction>) => {
  return {
    onSearch: (value: string) => dispatch(getItems({value, page: 1}))
  }
};

const NavContainer = connect<null, IDispatchProps, null>(null, mapDispatchToProps)(Nav);

export { NavContainer as Nav};
