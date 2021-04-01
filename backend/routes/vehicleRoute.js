import express from 'express';
import Vehicle from '../models/vehicleModel';

const vehicleRouter = express.Router();

vehicleRouter.get('/', async (req, res) => {
    const vehicles = await Vehicle.find({});
    res.status(200).send(vehicles);
});

vehicleRouter.get('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        res.status(200).send(vehicle);
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Vehicle not found',
            error
        })
    }
});

vehicleRouter.post('/', async (req, res) => {
    const { number, basePrice } = req.body;
    const vehicle = new Vehicle({ number, basePrice });
    try {
        if (vehicle) {
            const newVehicle = await vehicle.save();
            res.status(200).send(newVehicle);
        }
    } catch (error) {
        res.status(404).send({
            message: 'Error In Creating New Vehicle Data.'
        });
    }
});

vehicleRouter.put('/:id', async (req, res) => {
    const vehicleId = req.params.id;
    try {
        const vehicle = await Vehicle.findById(vehicleId);
        if (vehicle) {
            vehicle.number = req.body.number;
            vehicle.basePrice = req.body.basePrice;
            const updatedVehicle = await vehicle.save();
            res.send({ message: 'Vehicle Updated', vehicle: updatedVehicle });
        }
    } catch (error) {
        res.status(404).send({ message: 'Vehicle Not Found', error });
    }
})

vehicleRouter.delete('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id)
        if (vehicle) {
            const deleteVehicle = await vehicle.remove();
            res.status(200).send({
                message: 'Vehicle Deleted Successfully',
                data: deleteVehicle
            })
        }
    } catch (error) {
        res.status(404).send({
            message: 'Company Not found'
        })
    }
});

export default vehicleRouter;