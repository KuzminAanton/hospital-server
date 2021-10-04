const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../../db/models/users/index');

const jwtSecret = 'xkslfm29irj3rtf2m3fdio';

module.exports.newUser = async (req, res) => {
  const { login, password } = req.body;
  if (login && password) {
    const isUsed = await Users.findOne({ login });
    if (isUsed) {
      return res.status(300).json({ message: 'данный эмайл уже занят' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({
      login, password: hashedPassword,
    });
    const token = jwt.sign(
      { userId: user.id },
      jwtSecret,
      { expiresIn: '24h' },
    );
    await user.save().then(
      res.json({ token }),
    );
  } else {
    res.status(422).send('Value is not correct');
  }
};
