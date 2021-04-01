import express from 'express';
import mongoose from 'mongoose';
import Booking from '../models/bookingDataModel';

const bookingDataRouter = express.Router();

bookingDataRouter.get('/', async (req, res) => {
    const data = await Booking.find().sort({ date: -1 });
    res.send(data)
});
bookingDataRouter.get('/:id', async (req, res) => {
    try {
        const entry = await Booking.findById(req.params.id);
        res.status(200).send(entry);
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Entry not found',
            error
        })
    }
});
bookingDataRouter.put('/:id', async (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    try {
        const entry = await Booking.findById(req.params.id);
        if (entry) {
            entry.name = req.body.name;
            entry.ownerName = req.body.ownerName;
            entry.number = req.body.number;
            entry.location = req.body.location;
            entry.fuel = req.body.fuel;
            entry.vehicleType = req.body.vehicleType;
            entry.basePrice = req.body.basePrice;
            entry.driver = req.body.driver;
            entry.show = req.body.show;
            entry.book = req.body.book;
            entry.startDate = req.body.startDate;
            const updatedEntry = await entry.save();
            // console.log(updatedEntry);
            res.status(200).send({message:'Entry Updated',entry:updatedEntry})
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Entry not found',
            error
        })
    }
});
bookingDataRouter.get('/:id', async (req, res) => {
    try {
        const entry = await Booking.findById(req.params.id);
        res.status(200).send(entry);
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Entry not found',
            error
        })
    }
});
bookingDataRouter.post('/', async (req, res) => {
    const newData = new Booking(req.body);
    try {
        const data = await newData.save();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(404).send({ message: 'Error in Creating New Entry.' })
    }
});
bookingDataRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Booking.findByIdAndDelete(id)
        res.json({ message: 'Entry deleted Successfully' })
    } catch (error) {
        console.log(error);
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No entry found with that ${id}`)
    }
})

bookingDataRouter.put('/:id', async (req, res) => {
    const booking = await Booking.findById(req.params.id)
    try {
        if (booking) {
            booking.name = req.body.name;
            booking.number = req.body.number;
            booking.location = req.body.location;
            booking.driver = req.body.driver;
            booking.show = req.body.show;
            booking.book = req.body.book;

            const updatedBooking = await Booking.save();
            if (updatedBooking) {
                return res.status(200).send(
                    {
                        message: 'Booking Updated',
                        data: updatedBooking
                    }
                );
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(
            { message: ' Error in Updating.' });
    }
})

export default bookingDataRouter;