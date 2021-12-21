import { AxiosRequestConfig } from 'axios';
import { FetchApi } from '../../../configuration/interceptors';

import API from '../api';

type DataRequest = {
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: Date;
}

export async function post(data: DataRequest) {
  const options: AxiosRequestConfig = {
    method: 'POST',
    url: API,
    data
  };

  try {
    const response = await FetchApi(options);

    return {
      error: false,
      data: response.data
    }
  } catch (error) {
    return { error:true, data: error}
  }
}