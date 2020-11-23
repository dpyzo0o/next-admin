import axios, { AxiosInstance } from 'axios';

let httpServer: AxiosInstance;

function createHttpServer() {
  if (httpServer) {
    return httpServer;
  }

  httpServer = axios.create({
    timeout: 6000,
    headers: {
      flag: 'server',
    },
  });

  return httpServer;
}

function setHttpServerHeaders(headers: { [key: string]: any }) {
  const instance = createHttpServer();
  for (const key in headers) {
    instance.defaults.headers.common[key] = headers[key];
  }
}

export { createHttpServer, setHttpServerHeaders };
