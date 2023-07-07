const mongoose = require('mongoose');

const newAppntSchema = mongoose.Schema({
    isAPatient: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        default:""
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        default: function () {
            return this.firstName;
        }
    },
    appDate: {
        type: Date,
        required: true,
    },
    appTime: {
        type: String,
        default: ""
    },
    relName: {
        type: String,
        default: undefined
    },
    relation: {
        type: String,
        default: undefined
    }
});

const NewAppnt = mongoose.model('NewAppnt', newAppntSchema);
module.exports = NewAppnt;
