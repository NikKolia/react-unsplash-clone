import React from 'react';
import { Image } from '../../types/imagesApi';
import { GridItem } from './GridItem';
import './Grid.scss';

interface Props {
  images: Array<Image>;
  isLoading: boolean;
  title?: string
}

export class Grid extends React.PureComponent<Props> {
  render() {
    const { images, isLoading, title } = this.props;
    if (isLoading) {
      return <h2>loading...</h2>
    }
    return <div className={'grid'}>
      <h2>{title}</h2>
      <div className='grid__content'>
        {
          images.map(item => {
            const {description, urls, likes, id} = item;
            return <GridItem
              className={'grid__item'}
              id={id}
              description={description}
              url={urls.small}
              likes={likes}/>;
          })
        }
      </div>
    </div>;
  }
}
