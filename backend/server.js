import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import './db/connect.js';
import vehicleRouter from './routes/vehicleRoute.js';
import companyRouter from './routes/companyRoute.js';
import bookingDataRouter from './routes/bookingDataRoute.js';
import createBillRouter from './routes/createBillRoute.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/vehicle-data', vehicleRouter);
app.use('/api/company-data', companyRouter);
app.use('/api/booking-data', bookingDataRouter);
app.use('/api/bill', createBillRouter);

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>')
})
app.listen(PORT, () => {
  console.log(`Server is connected on http://localhost:${PORT}`);
});
