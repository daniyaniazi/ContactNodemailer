const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", () => {
  resizeBy.send("welcome to my form");
});

app.post("/api/form", (req, res) => {
  let data = req.body;

  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "danianiazi85@gmail.com",
      pass: "hxpfvmbqbomlykxw",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "farihadania@hotmail.com",
    subject: `Message from ${data.name}`,
    html: `
      <h3>Information</h3>
      <ul>
      <li>Name ${data.name}</li>
       <li>Email ${data.email}</li>
       
      </ul>
      <h4>Message</h4>
      <p>${data.message}</p>
      `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log("error");
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log("sent");
      res.send("success");
      smtpTransport.close();
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log(`server started at port ${PORT}`);
});
