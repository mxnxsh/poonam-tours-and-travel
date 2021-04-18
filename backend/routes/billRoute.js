import express from 'express';
import Bill from '../models/billModel.js';

const billRouter = express.Router();

billRouter.post('/', async (req, res) => {
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
billRouter.get('/all-bills', async (req, res) => {
  try {
    const data = await Bill.find().sort({ createdAt: -1 });
    res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(501).send({ message: 'No bill found' });
  }

})
billRouter.get('/:id', async (req, res) => {
  try {
    const data = await Bill.findById(req.params.id);
    res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(501).send({ message: 'No found' });
  }

})
export default billRouter;

