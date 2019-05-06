import { Image, SearchResponse } from '../types/imagesApi';
import axios from './axios';


export interface SearchItemsResponse {
  totalPages: number;
  total: number;
  items: Array<Image>
  page: number;
}

// search images
export const searchItems = async (payload: {value: string, page: number}): Promise<SearchItemsResponse>  => {
  const axiosConfig = {
    params: {
      query: payload.value,
      page: payload.page
    }
  };
  const  apiUrl = '/search/photos';
  const response = await axios.get<SearchResponse>(apiUrl, axiosConfig);
  const { total_pages: totalPages, total, results: items, currentPage: page} = response.data;
  return { totalPages, total, items, page }
};

// main images
export const fetchPhotos = async (): Promise<any>  => {
  const axiosConfig = {
    params: {
      page: 1
    }
  };
  const apiUrl = '/photos';
  const response = await axios.get<any>(apiUrl, axiosConfig);
  const { results: items } = response.data;
  return { totalPages: 0, total: 0, items: response.data }
};

// pagination main
export const loadItems = async (payload: {value: string, page: number}): Promise<SearchItemsResponse>  => {
  const currentPage = payload.page + 1;
  const axiosConfig = {
    params: {
      query: payload.value,
      page: currentPage
    }
  };
  const  apiUrl = '/search/photos';
  const response = await axios.get<SearchResponse>(apiUrl, axiosConfig);
  const { total_pages: totalPages, total, results: items, currentPage: page } = response.data;
  return { totalPages, total, items, page }
};
