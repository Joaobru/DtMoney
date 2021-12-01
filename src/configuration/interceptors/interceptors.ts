import axios, { AxiosRequestConfig, AxiosError, AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create();

/**
 * @export
 * @function
 * @name requestHandleSuccess
 * @description
 * Função que é chamada toda vez que vai ser executado um request.
 */
const requestHandleSuccess = (request: AxiosRequestConfig) => {
  return request;
};

/**
 * @export
 * @function
 * @name requestHandleError
 * @description
 * Função que é chamada toda vez que um responser for diferente de 200.
 */
const requestHandleError = (error: AxiosError) => Promise.reject(error);

instance.interceptors.request.use(
  (request) => requestHandleSuccess(request),
  (error) => requestHandleError(error)
);

export default instance;