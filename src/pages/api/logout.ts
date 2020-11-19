import { withSession } from 'src/utils/session';

export default withSession((req, res) => {
  req.session.destroy();
  res.send('logged out');
});
