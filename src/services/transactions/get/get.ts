import { AxiosRequestConfig } from 'axios';
import { FetchApi } from '../../../configuration/interceptors';

import API from '../api';

export async function get(id?: string) {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${API}/${id || ''}`
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