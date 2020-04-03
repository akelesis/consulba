module.exports = app => {
  const get = async (req, res) => {
    const data = req.body;

    app
      .db("appointment")
      .select("*")
      .where({ doctor_id: data.doctor_id })
      .then(appointments => res.json(appointments))
      .catch(err => res.status(500).send(err));
  };

  const save = async (req, res) => {
    appointment = req.body;

    app
      .db("appointment")
      .insert(appointment)
      .then(_ => res.status(204).send())
      .catch(err => res.status(500).send(err));
  };

  return { get, save };
};
