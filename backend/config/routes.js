module.exports = app => {
    app.routes('/doctor')
        .get(app.api.doctor.get)
        .post(app.api.doctor.post)
}