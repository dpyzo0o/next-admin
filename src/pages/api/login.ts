import { withSession } from 'src/utils/session';

export default withSession(async (req, res) => {
  const { username, password } = req.body;

  if ((username === 'admin' || username === 'user') && password === '123456') {
    const user = {
      id: 1001,
      name: 'admin',
      age: 26,
      role: username,
    };
    req.session.set('user', user);
    await req.session.save();
    res.status(200).json({
      message: 'success',
      data: user,
    });
  } else {
    res.status(401).json({ message: 'invalid username or password' });
  }
});
