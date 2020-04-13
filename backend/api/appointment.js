module.exports = (app) => {
  const { existsOrError } = app.api.validator;
  const get = async (req, res) => {
    const data = req.body;

    try {
      existsOrError(
        data.doctor_id,
        "A identificação do médico não foi especificada"
      );
    } catch (msg) {
      return res.status(400).send(msg);
    }

    app
      .db("appointment")
      .select("*")
      .where({ doctor_id: data.doctor_id })
      .then((appointments) => res.json(appointments))
      .catch((err) => res.status(500).send(err));
  };

  const save = async (req, res) => {
    appointment = req.body;
    console.log(appointment)
    app
      .db("appointment")
      .insert(appointment)
      .then((_) => res.status(204).send())
      .catch((err) => res.status(500).send(err));
  };

  return { get, save };
};
