const mongoose = require('mongoose')

const userSigninSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        default: function () {
            return this.firstName;
        }
    },
    lastName: {
        type: String,
        default: function () {
            return this.firstName;
        }
    },
    birthday: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserSignin = mongoose.model('UserSignin', userSigninSchema);

module.exports = { UserSignin};
