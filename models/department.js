const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    hod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: true,
        unique: true,
    },
    contactPhoneNumber: {
        type: [String],
        required: true,
    },
    branchs: {
        type: [String],
        required: true,
    },
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
