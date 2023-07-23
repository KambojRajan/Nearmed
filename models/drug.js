const mongoose = require("mongoose");

const drugSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salts: {
        type: [
            {
                name: {
                    type: String,
                    required: true,
                },
                percentage: {
                    type: mongoose.Schema.Types.Decimal128,
                    required: true,
                },
            },
        ],
        required: true,
    },
    manufacturedBy: {
        type: String,
        required: true,
    },
    manufacturingDate: {
        type: Date,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
    storageConditions: {
        type: String,
        required: true,
    },
    dosage: {
        type: String,
        default: "As per doctor's prescription",
    },
    legalCode: {
        type: String,
        required: true,
    },
    prescriptionDrug: {
        type: Boolean,
        required: true,
    },
    treats: {
        type: [String],
        required: true,
    },
});

const drugModel = mongoose.model("Drugs", drugSchema);
module.exports = drugModel;
