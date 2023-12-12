const mongoose = require('mongoose');

const configDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connectd to the database')
        
    } catch (error) {
        console.log(`Error connecting to the database: ${error}`)
    }

}

module.exports = configDB