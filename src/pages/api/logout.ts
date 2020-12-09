import { withSession } from 'src/utils/session';

export default withSession((req, res) => {
  req.session.destroy();
  // https://github.com/vvo/next-iron-session/issues/274
  res.setHeader('cache-control', 'no-store, max-age=0');
  res.send('logged out');
});
