import { rest } from 'msw';

export const handlers = [
  /**
   * Add yout MSW mock handlers.
   * Check https://mswjs.io/ for more information.
   */

  rest.get('/api/app-info', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'next-admin',
        author: 'dpyzo0o',
      })
    );
  }),
];
