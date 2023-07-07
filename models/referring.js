const mongoose = require('mongoose');

const dataInfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  patientFirstName: {
    type: String,
    required: true
  },
  patientLastName: {
    type: String,
    default: function() {
      return this.patientFirstName;
    }
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  yourDesignation: {
    type: String,
    required: true
  },
  referredTo: {
    type: String,
    required: true
  }
});

const RefData = mongoose.model('RefData', dataInfoSchema);

module.exports = RefData;
