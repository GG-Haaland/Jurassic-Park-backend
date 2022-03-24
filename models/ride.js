const { Schema } = require('mongoose')

const Ride = new Schema(
    {
        id_number: {type: String, required: true},
        description: {type: String, required: true},
        url: {type: String, required: true},
        min_height: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = Ride 