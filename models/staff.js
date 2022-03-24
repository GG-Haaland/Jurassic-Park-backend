const { Schema } = require('mongoose')

const Staff = new Schema(
    {
        id_number: {type: String, required: true},
        title: {type: String, required: true},
    }, 

    {timestamps: true}
)

module.exports = Staff