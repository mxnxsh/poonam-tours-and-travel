import express from 'express';
import Bill from '../models/billModel.js';

const createBillRouter = express.Router();

createBillRouter.post('/', async (req, res) => {
  if (req.body.bills.length === 0) {
    return res.status(400).send({ message: 'No bills' })
  }
  else {
    const bill = new Bill(req.body);
    const createdBill = await bill.save();
    // console.log(req.body);
    res.status(201).send({
      message: 'New Bill Created',
      order: createdBill
    })
  }
})
export default createBillRouter;

