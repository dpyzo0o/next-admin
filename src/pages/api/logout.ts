import { withSession } from 'src/utils/session';

export default withSession(async (req, res) => {
  req.session.destroy();
  res.setHeader('cache-control', 'public, max-age=0, must-revalidate');
  res.send('logged out');
});
