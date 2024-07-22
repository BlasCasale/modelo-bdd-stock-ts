import server from './src/server'
import dotenv from 'dotenv'
import db from './src/db'
dotenv.config()

const PORT = process.env.PORT

server.listen(PORT, () => {
  (async () => {
    try {
      await db.sync({ alter: true })
      console.log(`Listening on PORT ${PORT}`)
    } catch (error) {
      console.log(error)
    }
  })().catch(error => console.log(error))
})
