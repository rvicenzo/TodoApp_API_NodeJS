const port = process.env.PORT || 8001

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors)

server.listen(port, () => console.log(`Running on port: ${port}.`))

module.exports = server