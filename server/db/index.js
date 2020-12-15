const mongoose = require('mongoose')

mongoose
    .connect("mongodb://srv-captain--my-mongodb/mydatabase", { useMongoClient: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
