import mongoose from 'mongoose';

const bookingDataSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    ownerName: {
        type: String,
        default: 'Poonam-Travel'
    },
    number: {
        type: String,
    },
    location: {
        type: String,
    },
    // fuel: {
    //     type: String,
    // },
    vehicleType: {
        type: String,
    },
    basePrice: {
        type: String,
    },
    driver: {
        type: String,
    },
    show: {
        type: String,
    },
    book: {
        type: String,
    },
    startDate: {
        type: String,
        default: Date.now
    },
    extraKMS: {
        type: Number,
        default: 0
    },
    extraHRS: {
        type: Number,
        default: 0
    },
    extraRemark: [{
        remark: String,
        priceRemark: Number
    }],
    date: {
        type: Date,
        default: Date.now
    },
});

const Booking = mongoose.model('Booking', bookingDataSchema);

export default Booking;