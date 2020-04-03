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
      doctor_id,
      doctor_name,
      doctor_email,
      doctor_crm,
      doctor_password,
      doctor_confirm_password,
      doctor_city,
      doctor_uf
    } = req.body;
    console.log(req.body);
    try {
      existsOrError(doctor_email, "Login não informado");
      existsOrError(doctor_password, "Senha não informada");
      existsOrError(doctor_confirm_password, "Confirmação de senha invalida");
      equalsOrError(
        doctor_password,
        doctor_confirm_password,
        "Senhas não conferem"
      );
      const doctorFromDB = await app
        .db("doctor")
        .where({ doctor_crm: doctor_crm })
        .first();
      if (!doctor_id) notExistsOrError(doctorFromDB, "Usuario já cadastrado");
    } catch (msg) {
      console.log(msg);
      return res.status(400).send(msg);
    }

    doctor_password = encryptPassword(doctor_password);
    delete doctor_confirm_password;

    await knex("doctor")
      .insert({
        doctor_name,
        doctor_email,
        doctor_crm,
        doctor_password,
        doctor_city,
        doctor_uf
      })
      .then(_ => res.status(201).send())
      .catch(err => res.status(500).send(err));
  };

  return { get, post };
};
