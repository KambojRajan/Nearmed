const mongoose = require("mongoose")

const donateSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
   
    address: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    amount: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    }
})

const DonateModel = mongoose.model("Donate", donateSchema);
module.exports = DonateModel