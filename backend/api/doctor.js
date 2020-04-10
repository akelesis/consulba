const knex = require("../config/db");
const bcrypt = require("bcryptjs");

module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator;

  const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const get = async (req, res) => {
    const doctor = await knex("doctor").select("*");
    return res.json(doctor);
  };

  const post = async (req, res) => {
    let {
      id,
      name,
      email,
      crm,
      gender,
      password,
      confirm_password,
      city,
      uf
    } = req.body;

    try {
      existsOrError(email, "Login não informado");
      existsOrError(password, "Senha não informada");
      existsOrError(confirm_password, "Confirmação de senha invalida");
      equalsOrError(password, confirm_password, "Senhas não conferem");
      const doctorFromDB = await app
        .db("doctor")
        .where({ doctor_crm: crm })
        .first();
      if (!id) notExistsOrError(doctorFromDB, "Usuario já cadastrado");
    } catch (msg) {
      console.log(msg);
      return res.status(400).send(msg);
    }

    password = encryptPassword(password);
    delete confirm_password;
    await app
      .db("doctor")
      .insert({
        doctor_name: name,
        doctor_email: email,
        doctor_crm: crm,
        doctor_gender: gender,
        doctor_password: password,
        doctor_city: city,
        doctor_uf: uf
      })
      .then(_ => res.status(201).send())
      .catch(err => {
        console.log(res) 
        return res.status(500).send(err) 
      });
  };

  return { get, post };
};