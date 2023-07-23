const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    education: {
        type: [String],
        required: true,
    },
    specialization: {
        type: [String],
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    research: {
        type: [String],
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    availableDays: {
        type: [String],
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    phoneNumber: {
        type: [String],
        required: true,
    },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
