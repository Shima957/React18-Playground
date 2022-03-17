import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type Data = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

let posts: Data[] | undefined = undefined;

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options: AxiosRequestConfig = {
  url: url,
  method: 'GET',
};
const fetcher = () =>
  axios(options).then((res: AxiosResponse<Data[]>) => {
    const { data } = res;
    posts = data;
  });

export const useData = () => {
  if (posts === undefined) {
    throw fetcher();
  }

  return posts;
};
