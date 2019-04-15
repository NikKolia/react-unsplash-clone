import React from 'react';
import { Image } from '../../types/imagesApi';
import { GridItem } from './GridItem';
import './Grid.scss';
import Helmet from "react-helmet";
import {Button} from "../button";

interface Props {
  images: Array<Image>;
  isLoading: boolean;
  title?: string;
  total: number;
  totalPages: number;
  currentPage: number;
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
          <div>Found items: { this.props.total }</div>
          <div>Total pages: { this.props.totalPages }</div>
          <div>Current page: { this.props.currentPage }</div>
          <Button className={'btn'}>Show next page</Button>
        </div>
      </>
  }
}
