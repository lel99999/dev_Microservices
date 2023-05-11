const express = require('express')
const { join } = require('path')

const mountMiddleware = require('./mount-middleware')
const mountRoutes = require('./mount-routes')

function createExpressApp ({ config, env }){
  const app = express()

  // configure PUG
  app.set('views', join (_dirname, '..'))
  app.set('view engine', 'pug')

  mountMiddleware(app, env)
  mountRoutes(app,config)

  return app
}

module.exports = createExpressApp


