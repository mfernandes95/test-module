import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { email } = req.body;

      const checkEmail = await User.findOne({ where: { email } });

      console.log('USER', checkEmail);
      if (checkEmail)
        return res.status(400).json({ error: 'Duplicated email.' });

      const user = await User.create(req.body);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
