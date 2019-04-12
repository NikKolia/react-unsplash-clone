import React from 'react';
import { Image } from '../../types/imagesApi';
import { GridItem } from './GridItem';
import './Grid.scss';
import Helmet from "react-helmet";

interface Props {
  images: Array<Image>;
  isLoading: boolean;
  title?: string
  getPhotos(): void;
}

export class Grid extends React.PureComponent<Props> {
  componentDidMount(): void {
    this.props.getPhotos()
  }

  render() {
    const { images, isLoading } = this.props;
    if (isLoading) {
      return <h2>loading...</h2>
    }
    return <>
      <Helmet>
        <title>{this.props.title}</title>
      </Helmet>
      <div className={'grid'}>
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
      </div>
      </>
  }
}
