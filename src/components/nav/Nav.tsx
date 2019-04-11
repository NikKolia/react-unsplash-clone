import { SearchForm } from '../searchForm';
import React, { ReactNode } from 'react';

import './Nav.scss';

interface IProps {
  onSearch: (value: string) => void,
}

export const Nav: React.FunctionComponent<IProps> = ({ onSearch, children }) => {
  return <nav className={'page-nav'}>
    <div className='page-nav__container'>
      <SearchForm className={'page-nav__search-form'} onSubmit={onSearch}/>
      <ul className={'page-nav__menu'}>
        { children }
      </ul>
    </div>
  </nav>
};


