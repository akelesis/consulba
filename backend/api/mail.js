const nodemailer = require("nodemailer");
const { provider, email, password, sender } = require("../.env");

module.exports = (app) => {
  const send = async (req, res) => {
    mail = req.body;

    const transporter = nodemailer.createTransport({
      service: provider,
      port: 465,
      type: "SMTP",
      secure: false,
      host: "smtp.gmail.com",
      auth: {
        user: email,
        pass: password,
      },
    });

    console.log(transporter)

    const mailOption = {
      from: sender,
      to: mail.patient_email,
      subject: `${mail.subject}`,
      text: `${mail.text}`,
    };

    console.log(mailOption)

    await transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        console.log(err)
        res.status(500).send();
      } else {
        res.status(204).send();
      }
    });
  };

  return { send };
};
