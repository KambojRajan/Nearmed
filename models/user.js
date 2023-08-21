const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 0,
    },
    gender: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    phoneNumber: {
        type: String,
        default: "",
    },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
