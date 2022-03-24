const { Schema } = require('mongoose')

const Restaurant = new Schema(
    {
        id_number: {type: String, required: true},
        name: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
        serves_dino: {type: boolean, required: true},
    },

    {timestamps: true}
)

module.exports = Restaurant