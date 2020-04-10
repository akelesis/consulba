module.exports = app => {
  app
    .route("/doctor")
    .get(app.api.doctor.get)
    .post(app.api.doctor.post);

  app.route("/auth").post(app.api.auth.signIn);

  app
    .route("/appointment")
    .get(app.api.appointment.get)
    .post(app.api.appointment.save);

  app.route("/mail").post(app.api.mail.send);
};
