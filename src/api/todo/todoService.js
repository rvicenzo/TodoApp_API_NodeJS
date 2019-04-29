const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

//new: para retornar o registro já atualizado
//runValidators: aplicar validações em updates
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
