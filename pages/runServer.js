const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const donate = require('../models/Donate');
const refer = require('../models/Referring');
const { UserSignin } = require('../models/user');
const NewAppointment = require('../models/newAppointment');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/newDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected successfully");

    app.post('/doDonation', (req, res) => {
      const { title, firstName, lastName, country, state, address, zipCode, phone, email, amount } = req.body;
      const newDonation = new donate({
        title: title,
        firstName: firstName,
        lastName: lastName,
        country: country,
        state: state,
        address: address,
        zipCode: zipCode,
        phone: phone,
        email: email,
        amount: amount
      });

      newDonation.save()
        .then((donation) => {
          console.log("The donation was saved:", donation);
          res.status(200).json({ message: "Donation saved successfully" });
        })
        .catch((err) => {
          console.log("Error occurred while saving donation:", err);
          res.status(500).json({ error: "Failed to save donation" });
        });
    });

    app.post('/doRefer', (req, res) => {
      const { title, patientFirstName, patientLastName, country, state, address, zipCode, phone, yourDesignation, referredTo } = req.body;
      const newReference = new refer({
        title: title,
        patientFirstName: patientFirstName,
        patientLastName: patientLastName,
        country: country,
        state: state,
        address: address,
        zipCode: zipCode,
        phone: phone,
        yourDesignation: yourDesignation,
        referredTo: referredTo
      });

      newReference.save()
        .then((referring) => {
          console.log("The reference was saved:", referring);
          res.status(200).json({ message: "Reference saved successfully" });
        })
        .catch((err) => {
          console.log("Error occurred while saving reference:", err);
          res.status(500).json({ error: "Failed to save reference" });
        });
    });

    app.post('/login', (req, res) => {
      const { email, password } = req.body;
      UserSignin.findOne({ email: email, password: password })
        .then((user) => {
          if (user) {
            console.log("Login success");
            res.render(`/Components/[${password}]?userData=${JSON.stringify(user)}`);
            res.redirect(`/Components/Navbar/[${true},${password}]`)
            res.status(200).json({ success: true });
          } else {
            console.log("Invalid credentials");
            res.status(404).json({ success: false });
          }
        })
        .catch((err) => {
          console.log("Error occurred while logging in:", err);
          res.status(500).json({ error: "Failed to log in" });
        });
    });


    app.get('/isDone', (req, res) => {
      const { isAPatient, firstName, lastName, appDate, relName, relation } = req.query;

      NewAppointment.findOne()
        .sort({ appDate: -1, appTime: -1 })
        .then((appointment) => {
          if (!appointment) {
            console.log("No such appointment");
            res.status(500).json({ error: "Failed to retrieve last appointment" });
            return;
          }

          const newAppnt = new NewAppointment();
          newAppnt.appDate = appointment.appDate + 5;
          newAppnt.appTime = appointment.appTime;
          newAppnt.firstName = firstName;
          newAppnt.lastName = lastName;
          if (!isAPatient) {
            newAppnt.relName = relName;
            newAppnt.relation = relation;
          }

          newAppnt.save()
            .then((savedAppointment) => {
              console.log("Appointment saved successfully:", savedAppointment);
              res.status(200).json({ message: "Appointment saved successfully" });
            })
            .catch((err) => {
              console.log("Error occurred while saving appointment:", err);
              res.status(500).json({ error: "Failed to save appointment" });
            });
        })
        .catch((err) => {
          console.log("Error occurred while retrieving appointment:", err);
          res.status(500).json({ error: "Failed to retrieve appointment" });
        });
    });

    app.post('/returing', (req, res) => {
      const { email, password } = req.body;
      UserSignin.findOne({ email: email, password: password })
        .then((user) => {
          if (!user) {
            console.log("Invalid credentials");
            res.status(404).json({ success: false });
            return;
          }

          NewAppointment.findOne({ password: password, firstname: user.firstname, lastName: user.lastName })
            .then((appointment) => {
              if (!appointment) {
                console.log("No appointment found");
                res.status(404).json({ success: false });
                return;
              }

              const newDate = appointment.appDate;
              appointment.updateOne({ appDate: newDate })
                .then(() => {
                  console.log("Appointment date updated successfully");
                  res.status(200).json({ success: true });
                })
                .catch((err) => {
                  console.log("Error occurred while updating appointment date:", err);
                  res.status(500).json({ error: "Failed to update appointment date" });
                });
            })
            .catch((err) => {
              console.log("Error occurred while retrieving appointment:", err);
              res.status(500).json({ error: "Failed to retrieve appointment" });
            });
        })
        .catch((err) => {
          console.log("Error occurred while logging in:", err);
          res.status(500).json({ error: "Failed to log in" });
        });
    });

    app.post('/signin', (req, res) => {
      const { email, password, LegalFirstName, legalMiddleName, legalLastName, birthday } = req.body;
      const newSignin = new UserSignin({
        email: email,
        password: password,
        firstName: LegalFirstName,
        middleName: legalMiddleName,
        lastName: legalLastName,
        birthday: birthday
      });

      newSignin.save()
        .then((signing) => {
          console.log("The sign-in was a success:", signing);
          res.status(200).json({ message: "Sign-in success" });
        })
        .catch((err) => {
          console.log("Error occurred while signing in:", err);
          res.status(500).json({ error: "Failed to sign in" });
        });
    });

    app.listen(5000, () => {
      console.log("Listening on the server 5000...");
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });
