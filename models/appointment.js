const mongoose = require('mongoose');

const whenPatientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    default: function() {
      return this.firstName;
    }
  },
  appointmentDetails: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  }
});

const whenNotPatientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  relation: {
    type: String,
    default: ""
  },
  patientFirstName: {
    type: String,
    required: true
  },
  patientLastName: {
    type: String,
    default: function() {
      return this.firstName;
    }
  },
  appointmentDetails: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  }
});

const WhenPatient = mongoose.model('WhenPatient', whenPatientSchema);
const WhenNotPatient = mongoose.model('WhenNotPatient', whenNotPatientSchema);

module.exports = { WhenPatient, WhenNotPatient };
