const mongoose = require("mongoose")

const clinicShema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: [String],
        required: true,
    },
})

const clinicModel = new mongoose.model("Clinic", clinicShema)
module.exports = clinicModel