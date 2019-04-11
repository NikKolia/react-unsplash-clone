import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AuthAction } from '../store/auth/types';
import { isAuthenticated, setToken } from '../store/auth';
import { Auth } from '../components/auth';
import { AppState } from '../store';
import { RouteChildrenProps } from 'react-router';

interface IDispatchProps {
  setToken: (code: string) => Dispatch<AuthAction>;
}

interface IStateProps {
  isAuthenticated: boolean
}

interface OwnProps extends RouteChildrenProps {}

const mapStateToProps = (state: AppState) => (
  {
    isAuthenticated: isAuthenticated(state)
  }
);


const mapDispatchToProps = (dispatch: Dispatch<AuthAction>) => (
  {
    setToken: (code: string) => dispatch(setToken(code))
  }
);

const AuthContainer = connect<IStateProps, IDispatchProps, OwnProps>(mapStateToProps as any, mapDispatchToProps)(Auth);

export { AuthContainer as Auth };
