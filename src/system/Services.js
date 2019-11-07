const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = Schema(
    {
        name: {type: String, required: true},
        time: {type: Number, required: true},
    }, 
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;