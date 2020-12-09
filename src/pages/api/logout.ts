import { withSession } from 'src/utils/session';

export default withSession(async (req, res) => {
  req.session.destroy();
  res.send('logged out');
});
