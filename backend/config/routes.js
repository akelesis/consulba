module.exports = (app) => {
  app
    .route("/doctor")
    .get(app.api.doctor.get)
    .post(app.api.doctor.post)
    .put(app.api.doctor.update);

  app.route("/auth").post(app.api.auth.signIn);

  app
    .route("/appointment")
    .post(app.api.appointment.save)
    .put(app.api.appointment.save);

  app.route("/appointment/:id").get(app.api.appointment.getByDoctor);

  app.route("/mail").post(app.api.mail.send);
};
