const Dino = require('../models/dino');
const Ride = require('../models/ride');
const Restaurant = require('../models/restaurant');

const getAllDinos = async (req, res) => {
    try {
        const dinos = await Dino.find()
        return res.status(200).json({ dinos })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getDinoById = async (req, res) => {
    try {
        const { id } = req.params;
        const dino = await Dino.findById(id)
        if (dino) {
            return res.status(200).json({ dino });
        }
        return res.status(404).send('dino with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllRides = async (req, res) => {
    try {
        const rides = await Ride.find()
        return res.status(200).json({ rides })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        return res.status(200).json({ restaurants })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllDinos,
    getDinoById,
    getAllRides,
    getAllRestaurants
}