const mongoose = require('mongoose')
const DinoSchema = require('./dino')
const RideSchema = require('./ride')
const UserSchema = require('./user')
const RestaurantSchema = require('./restaurant')

const Dino = mongoose.model('Dino', DinoSchema)
const Ride = mongoose.model('Ride', RideSchema)
const User = mongoose.model('User', UserSchema)
const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

module.exports = {
    Dino,
    Ride, 
    User,
    Restaurant
}