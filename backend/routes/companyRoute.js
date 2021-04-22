import express from 'express';
import Company from '../models/companyModel';

const companyRouter = express.Router();

companyRouter.get('/', async (req, res) => {
    const companies = await Company.find({}).sort({ date: -1 })
    res.status(200).send(companies);
});

companyRouter.post('/', async (req, res) => {
    const { name, address, mobile, email, GSTNumber, panCard } = req.body;
    const company = new Company({ name, address, mobile, email, GSTNumber, panCard });
    try {
        const newCompany = await company.save();
        res.status(200).json(newCompany);
    } catch (error) {
        res.status(404).send({
            message: 'Error In Creating Company.'
        })
    }
});

companyRouter.get('/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        res.status(200).send(company);
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Company not found',
            error
        })
    }
});
companyRouter.put('/:id', async (req, res) => {
    const companyId = req.params.id;
    try {
        const company = await Company.findById(companyId);
        if (company) {
            company.name = req.body.name;
            company.address = req.body.address;
            company.mobile = req.body.mobile;
            company.email = req.body.email;
            const updatedCompany = await company.save();
            res.send({ message: 'Company Updated', company: updatedCompany });
        }
    } catch (error) {
        res.status(404).send({ message: 'Company Not Found', error });
    }
})
companyRouter.delete('/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id)
        if (company) {
            const deleteCompany = await company.remove();
            res.status(200).send({
                message: 'Company Deleted Successfully',
                data: deleteCompany
            })
        }
    } catch (error) {
        res.status(404).send({
            message: 'Company Not found'
        })
    }
});

export default companyRouter;