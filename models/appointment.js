const mongoose = require("mongoose")


const appointmentShema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    lastAppointmentDate: {
        type: Date,
        default: null,
    },
}, { timestamps: true });


const appointmentModel = new mongoose.model("Appointment", appointmentShema);

module.exports = appointmentModel