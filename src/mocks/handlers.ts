import { rest } from 'msw';

export const handlers = [
  rest.get('/api/app-info', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'Hello from MSW',
      })
    );
  }),
  rest.get('/api/user', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1001,
        name: 'Yang Xu',
      }),
      ctx.delay(500)
    );
  }),
];
