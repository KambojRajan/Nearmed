const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    symptoms: [
        {
            type: String,
            required: true,
        },
    ],
    causes: [
        {
            type: String,
            required: true,
        },
    ],
    treatments: [
        {
            type: String,
            required: true,
        },
    ],
});

const Disease = mongoose.model("Disease", diseaseSchema);

module.exports = Disease;
