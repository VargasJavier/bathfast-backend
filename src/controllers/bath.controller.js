import BathService from '../services/bath.service.js';

const service = new BathService();


const getAll = async (req, res, next) => {
    try {
        const baths = await service.find();
        res.json(baths);
    } catch (error) {
        next(error);
    }
}
const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const bath = await service.findOne(id);
        res.json(bath);
    } catch (error) {
        next(error);
    }
    };
const create = async (req, res, next) => {
    try {
        const body = req.body;
        const newBath = await service.create(body);
        res.status(201).json(newBath);
    } catch (error) {
        next(error);
    }
};
const updateBath = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const newBath = await service.update(id, body);
        res.json(newBath);
    } catch (error) {
        next(error);
    }
};
const deleteBath = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newBath = await service.update(id);
        res.json(newBath);
    } catch (error) {
        next(error);
    }
};

export default {
    getAll,
    getOne,
    create,
    updateBath,
    deleteBath
}