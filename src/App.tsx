import React from 'react';

import { Nav } from './containers';
import './App.scss';
import { Route } from 'react-router';
import { NavItem } from './components/nav';
import { routes } from './routes';

export class App extends React.Component<{}, {}> {
  componentDidMount(): void {
  }

  public render() {
    return <div className={'page-container'}>
      <Nav>
        {
          routes.map(({path, title}) => (
            <NavItem path={path} title={title}/>
          ))
        }
      </Nav>
      {
        routes.map(({path, exact, Component, props}) => (
          <Route
            path={path}
            exact={exact}
            render={(routeProps) => {
              console.log(routeProps);
              return <Component {...props} {...routeProps}/>;
            }}
          />
        ))
      }

    </div>;
  }
}




