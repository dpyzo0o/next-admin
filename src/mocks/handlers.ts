import { rest } from 'msw';

export const handlers = [
  rest.get('/api/app-info', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'Hello from MSW',
      })
    );
  }),
];
