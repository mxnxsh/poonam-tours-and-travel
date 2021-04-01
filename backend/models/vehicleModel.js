import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
    },
    basePrice: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;