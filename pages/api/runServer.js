const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const Donate = require('../../models/donate')
const Appointment = require('../../models/appointment')
const ReferedAppointment = require("../../models/referedAppointment")
const Doctor = require("../../models/doctor")
const Clinic = require('../../models/clinic')
const Department = require("../../models/department")
const Diseases = require("../../models/disease")
const Labs = require("../../models/labTest")
const Drugs = require("../../models/drug")

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
const secretKey = 'youCanAddThisOneByYourOwn';
mongoose
  .connect("mongodb://127.0.0.1:27017/Nearmed", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
    app.listen(5000, () => {
      console.log("Listening on port 5000...");
    });
  })
  .catch((err) => {
    console.log(err);
  });


app.post("/createAccount", async (req, res) => {
  try {
    const { firstName, middleName, lastName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const userDoc = await User.create({
      firstName,
      middleName,
      lastName,
      email,
      password: hashedPassword,
    });
    const appointmentDoc = Appointment.create({
      userName: (firstName + middleName + lastName),
      password: hashedPassword,
    })
    res.status(200).json({ success: true });
  } catch (err) {
    console.log("Error while creating an account", err);
    res.status(500).json({ success: false, error: "Failed to create an account" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const userDoc = await User.findOne({ firstName: userName });
    if (userDoc) {
      const isPasswordCorrect = bcrypt.compareSync(password, userDoc.password);
      if (isPasswordCorrect) {
        const token = jwt.sign({ userName, id: userDoc.id }, secretKey);
        res.cookie("token", token, { httpOnly: true });

        res.status(200).json({
          id: userDoc._id,
          firstName: userName,
          age: userDoc.age,
          gender: userDoc.gender,
          address: userDoc.address,
          phone: userDoc.phone,
          email: userDoc.email,
        });
      } else {
        res.status(401).json({ success: false, error: "Incorrect password" });
      }
    } else {
      res.status(400).json({ success: false, error: "Invalid username" });
    }
  } catch (error) {
    console.log("Error while logging in:", error);
    res.status(500).json({ success: false, error: "Failed to login" });
  }
});




app.post("/donate", async (req, res) => {
  try {
    const { title, firstName, lastName, address, zipCode, phoneNumber, email, amount } = req.body;

    const userDoc = await Donate.create({
      title, firstName, lastName, address, zipCode, phoneNumber, email, amount
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.log("Error while creating an account", err);
    res.status(500).json({ success: false, error: "Failed to create an account" });
  }
})

app.post("/rPatients", async (req, res) => {
  console.log("Hello")
  try {
    const { userName, password, appointmentDate } = req.body;
    const appDoc = await Appointment.findOne({ userName: userName });
    console.log(appDoc)
    if (appDoc) {
      const isPasswordCorrect = bcrypt.compareSync(password, appDoc.password);
      if (isPasswordCorrect) {
        if (appDoc.lastAppointmentDate) {
          const lastAppointmentDate = new Date(appDoc.lastAppointmentDate);
          const newDate = new Date(lastAppointmentDate.getTime() + 5 * 24 * 60 * 60 * 1000);
          await Appointment.updateOne(
            { userName: appDoc.userName },
            { password: appDoc.password },
            { lastAppointmentDate: newDate }
          );
          res.status(200).json({ success: true });
        } else {
          const newDate = new Date(appointmentDate);
          await Appointment.updateOne({
            userName: appDoc.userName,
            password: appDoc.password,
            lastAppointmentDate: newDate
          });
          res.status(200).json({ success: true });
        }
      } else {
        res.status(401).json({ success: false, error: "Incorrect password" });
      }
    } else {
      res.status(400).json({ success: false, error: "Invalid username" });
    }
  } catch (error) {
    console.log("Error while processing rPatients request:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.post("/referPatient", async (req, res) => {
  try {
    const { patientFirstName, patientLastName, address, referingDoctorName, referedDoctorName, appointmentDate } = req.body;
    const userDoc = await ReferedAppointment.create({
      patientFirstName, patientLastName, address, referingDoctorName, referedDoctorName, appointmentDate
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.log("Error while referring", err);
    res.status(500).json({ success: false, error: "Failed to refer" });
  }
});

app.get('/aboutDoctor', async (req, res) => {

  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});

app.get('/clinics', async (req, res) => {

  try {
    const clinics = await Clinic.find();
    res.json(clinics);
  } catch (error) {
    console.error('Error fetching Clinics:', error);
    res.status(500).json({ error: 'Failed to fetch Clinics' });
  }
});

app.get('/findDoctors', async (req, res) => {
  const { specialization } = req.query;
  try {
    // a more sophisticated logic can be implemented here if required
    const doctorDoc = await Doctor.find({ specialization });
    res.json(doctorDoc);
  } catch (err) {
    console.log("Error fetching doctor", err);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});


app.get('/findAllDoctors', async (req, res) => {

  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});

app.get("/aboutDepartment", async (req, res) => {
  try {
    const departments = await Department.find().populate('hod', 'name');
    res.json(departments);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
})

app.get('/aboutDisease', async (req, res) => {
  try {
    const disease = await Diseases.find();
    res.json(disease);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});

app.get("/aboutLabs", async (req, res) => {
  try {
    const labs = await Labs.find();
    res.json(labs);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
})

app.get("/aboutDrug", async (req, res) => {
  try {
    const drugs = await Drugs.find();
    res.json(drugs);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
})

app.get("/profile")

module.exports = app;
