const restful = require('node-restful')
const mongoose = restful.mongoose

//cria o schema do model e suas validações
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

//exporta o schema através do método model do restful
module.exports = restful.model('Todo', todoSchema)