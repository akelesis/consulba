const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcryptjs");

module.exports = app => {
  const signIn = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Insira email e senha");
    }

    const user = await app
      .db("doctor")
      .where({ doctor_email: req.body.email })
      .first();

    if (!user) return res.status(400).send("Usuário não encontrado");

    const isMatch = bcrypt.compareSync(req.body.password, user.doctor_password);
    if (!isMatch)
      return res.status(401).send("Combinação de email e senha inválida!");

    const now = Date.now();

    payload = {
      id: user.doctor_id,
      name: user.doctor_name,
      gender: user.doctor_gender,
      email: user.doctor_email,
      senha: user.doctor_password,
      iat: now,
      exp: now + 1000 * 60 * 60 * 24
    };

    res.json({
      ...payload,
      token: jwt.encode(payload, authSecret)
    });
  };

  const validateToken = (req, res) => {
    const userData = req.body || null;

    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);
        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true);
        }
      }
    } catch (e) {
      res.status(401);
    }
    res.send(false);
  };

  return { signIn, validateToken };
};