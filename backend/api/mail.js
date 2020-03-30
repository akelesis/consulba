const nodemailer = require("nodemailer");
const { provider, email, password, sender, receiver } = require("../.env");

module.exports = app => {
  const send = async (req, res) => {
    mail = req.body;

    const transporter = nodemailer.createTransport({
      service: provider,
      auth: {
        user: email,
        pass: password
      }
    });

    const mailOption = {
      from: sender,
      to: receiver,
      subject: `${mail.subject}`,
      text: `${mail.text}`
    };

    await transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        res.status(500).send();
      } else {
        res.status(204).send();
      }
    });
  };

  return { send };
};
