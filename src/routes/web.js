const express = require('express')

const route = express.Router()

const initWebRoutes = (app) => {
    
    return app.use('/', route)
}

module.exports = initWebRoutes
