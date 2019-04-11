import { Link } from 'react-router-dom';
import React from 'react';

interface IProps {
  path: string;
  title: string;
}

export const NavItem: React.FunctionComponent<IProps> = ({path, title}) => {
  return  <li className={'page-nav__item'}>
    <Link to={path}><span>{title}</span></Link>
  </li>
}
