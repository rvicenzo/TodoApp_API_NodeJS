const express = require('express') //express é singleton

module.exports = (server) => {

    const router = express.Router()

    //server.use = midleware
    //router sera chamado sempre que o request iniciar com /api no front
    server.use('/api', router)

    //TODO routes
    const todoService = require('../api/todo/todoService')
    
    //register: registra a rota aceitando os metodos em todoService
    // /todos: url base para o model 'todo'
    todoService.register(router, '/todos')
}

