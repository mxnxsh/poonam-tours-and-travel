import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
  bills: [{
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
    },
    extraHRS: {
      type: Number,
    },
  }],
  name: {
    type: String
  },
  totalHRS: {
    type: Number
  },
  totalKMS: {
    type: Number
  },
  bPrice: {
    type: Number
  },
  subTotal: {
    type: Number
  },
  date: {
    type: String
  }
}, {
  timestamps: true
})

const Bill = mongoose.model('Bill', billSchema);
export default Bill;