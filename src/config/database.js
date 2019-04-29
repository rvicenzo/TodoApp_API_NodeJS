const mongoose = require('mongoose')
const credentials = 'mongodb://localhost/todo'

//retirar msg de advertencia
mongoose.Promise = global.Promise
module.exports = mongoose.connect(credentials)
