import express from 'express'
import morgan from 'morgan'
import router from './routes/index.routes'

const server = express()

server.use(morgan('dev'))
server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
server.use(router)
server.use('*', (req, res) => {
  res.status(404).json({ error: 'Por favor ingrese un endpoint válido.' })
})

export default server
