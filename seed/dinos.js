const db = require('../db')
const { Dino } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const dinos = [
        {}, 
        {}
    ]
    await Dino.insertMany(dinos)
    console.log('Created dinos!')

}

const run = async () => {
    await main()
    db.close()
}

run()