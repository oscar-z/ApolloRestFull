const mongoose = require('mongoose')

const DB_URL = 'mongodb+srv://oscar-z:mongodb1@mdb-akne0.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(DB_URL, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log(`Connected to MondoDB Atlas`);
})

mongoose.connection.once('error', error => {
    console.error(error);
})

module.exports = mongoose