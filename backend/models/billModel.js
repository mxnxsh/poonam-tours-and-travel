import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
  billItems: [{
    name: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    entry: {
      type: String,
      required: true
    },
    basePrice: {
      type: String,
      required: true
    },
    book: {
      type: String,
      required: true
    },
    show: {
      type: String,
      required: true
    },
    extraKMS: {
      type: Number,
      required: true
    },
    extraHRS: {
      type: Number,
      required: true
    },
  }]

})

const Bill = mongoose.model('Bill', billSchema);
export default Bill;