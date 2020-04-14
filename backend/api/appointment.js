module.exports = (app) => {
  const { existsOrError } = app.api.validator;
  const getByDoctor = async (req, res) => {
    const doctor_id = req.params.id;

    try {
      existsOrError(
        doctor_id,
        "A identificação do médico não foi especificada"
      );
    } catch (msg) {
      return res.status(400).send(msg);
    }

    app
      .db("appointment")
      .select("*")
      .where({ doctor_id: doctor_id })
      .then((appointments) => res.json(appointments))
      .catch((err) => res.status(500).send(err));
  };

  const save = async (req, res) => {
    appointment = req.body;

    if (appointment.appoint_id) {
      app
        .db("appointment")
        .update(appointment)
        .where({ appoint_id: appointment.appoint_id })
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send());
    } else {
      app
        .db("appointment")
        .insert(appointment)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    }
  };

  return { getByDoctor, save };
};
