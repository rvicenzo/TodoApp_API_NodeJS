const restful = require('node-restful')
const mongoose = restful.mongoose

//cria o schema do model e suas validações
const todoSchema = new mongoose.Schema({
    time: { type: String, required: true },
    modality: { type: String, require: true },
    date: { type: Date, require: true },
    createdAt: { type: Date, default: Date.now }
})

//exporta o schema através do método model do restful
module.exports = restful.model('Todo', todoSchema)