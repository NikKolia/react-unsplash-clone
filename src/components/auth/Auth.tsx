import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import configs from '../../configs';

export interface AuthProps extends RouteChildrenProps {
  setToken(code: string): void;
  isAuthenticated?: boolean;
}

export class Auth extends React.PureComponent<AuthProps, any> {
  componentDidMount(): void {
    const { search } = this.props.location;
    if (search.indexOf('code=') !== -1) {
      const code = search.slice(search.indexOf('=') + 1);
      this.props.setToken(code);
    }
  }

  componentWillReceiveProps(nextProps: Readonly<AuthProps>, nextContext: any): void {
    if (nextProps.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  render() {
    return <div>
      <a href={`https://unsplash.com/oauth/authorize?client_id=${configs.clientId}&redirect_uri=${configs.redirectUri}&response_type=${configs.response_type}&scope=${configs.scope}`}>authorize</a>
    </div>;
  }
}
