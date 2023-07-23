const mongoose = require("mongoose");

const ReferedAppointmentSchema = mongoose.Schema({
  patientFirstName: {
    type: String,
    required: true,
  },
  patientLastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  referingDoctorName: {
    type: String,
    required: true,
  },
  referedDoctorName: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: Date,
    default: null,
  }
}, { timestamps: true });

const ReferedAppointmentModel = mongoose.model("ReferedAppointment", ReferedAppointmentSchema);

module.exports = ReferedAppointmentModel;
