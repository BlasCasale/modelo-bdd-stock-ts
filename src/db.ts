import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const DB_NAME = process.env.DB_NAME
const DB_PASS = process.env.DB_PASS
const DB_PORT = process.env.DB_PORT
const DB_USER = process.env.DB_USER

const db = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
  { logging: false }
)

const connectToDataBase = async (): Promise<void> => {
  try {
    await db.authenticate()
  } catch (error) {
    console.error('Error al conectar la base de datos \n', error)
  }
}

void connectToDataBase()

export default db
