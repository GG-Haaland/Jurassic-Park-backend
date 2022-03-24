const mongoose = require('mongoose')
const DinoSchema = require('./dino')
const RideSchema = require('./ride')
const UserSchema = require('./user')

const Dino = mongoose.model('Dino', DinoSchema)
const Ride = mongoose.model('Ride', RideSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    Dino,
    Ride, 
    User
}