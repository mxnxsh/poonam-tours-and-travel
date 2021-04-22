import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    GSTNumber: {
        type: String,
    },
    panCard: {
        type: String,
    },
    email: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },

});

const Company = mongoose.model('Company', companySchema);

export default Company;