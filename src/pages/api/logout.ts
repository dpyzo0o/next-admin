import { withSession } from 'src/utils/session';

export default withSession(async (req, res) => {
  req.session.destroy();
  res.setHeader('cache-control', 'public, s-maxage=0, must-revalidate');
  res.send('logged out');
});
