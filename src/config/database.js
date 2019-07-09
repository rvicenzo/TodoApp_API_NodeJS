const mongoose = require('mongoose')
const credentials = 'mongodb://luizalabs:lulabs2019@ds349587.mlab.com:49587/heroku_7rc4vgwf'

//retirar msg de advertencia
mongoose.Promise = global.Promise
module.exports = mongoose.connect(credentials)
