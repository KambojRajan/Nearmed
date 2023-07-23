const mongoose = require("mongoose")

const profileSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        default: this.firstName
    },
    lastName: {
        type: String,
        default: this.firstName
    },
    gender: {
        type: Boolean,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    medicine: {
        type: [String],
        default: [""]
    }
})

const profileModel = mongoose.model("Profile", profileSchema)
exports.model = profileModel