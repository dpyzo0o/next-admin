import { isServer } from '../misc';
import { createHttpClient } from './client';
import { createHttpServer } from './server';

export const httpClient = createHttpClient();
export const httpServer = createHttpServer();
export const http = isServer() ? httpServer : httpClient;

export * from './client';
export * from './server';
