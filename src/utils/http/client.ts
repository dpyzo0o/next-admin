import axios, { AxiosInstance } from 'axios';

let httpClient: AxiosInstance;

function createHttpClient() {
  if (httpClient) {
    return httpClient;
  }

  httpClient = axios.create({
    headers: {
      'x-sent-from': 'client',
    },
  });

  return httpClient;
}

function setHttpClientHeaders(headers: Record<string, any>) {
  const instance = createHttpClient();
  for (const key in headers) {
    instance.defaults.headers.common[key] = headers[key];
  }
}

export { createHttpClient, setHttpClientHeaders };
