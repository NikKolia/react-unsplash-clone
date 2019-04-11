import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getItems } from '../store/images';
import { ImagesAction } from '../store/images/types';
import { SignIn } from '../components/signIn/SignIn';

interface IDispatchProps {
  onSubmit: (value: string) => Dispatch<ImagesAction>;
}

const mapDispatchToProps = (dispatch: Dispatch<ImagesAction>) => {
  return {
    onSubmit: (value: string) => dispatch(getItems({value, page: 1}))
  }
};

const SignInContainer = connect<null, IDispatchProps, null>(null, mapDispatchToProps)(SignIn);

export { SignInContainer as SignIn};
