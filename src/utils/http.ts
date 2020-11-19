import axios, { AxiosInstance } from 'axios';
import { isServer } from './misc';

let httpClient: AxiosInstance;
let httpServer: AxiosInstance;

function createHttpClient() {
  if (httpClient) {
    return httpClient;
  }

  httpClient = axios.create({
    timeout: 2000,
  });
  return httpClient;
}

function createHttpServer() {
  if (httpServer) {
    return httpServer;
  }

  httpServer = axios.create({
    timeout: 6000,
  });
  return httpServer;
}

const http = isServer() ? createHttpServer() : createHttpClient();

export default http;
