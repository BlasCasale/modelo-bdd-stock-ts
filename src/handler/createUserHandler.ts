import { Request, Response } from 'express'
import createUser from '../controller/createUser'
import { successfulRes } from '../utils/const'
import { CustomError } from '../types'

export const createUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userName, pin } = req.body
    const user = await createUser({ userName, pin })
    res.send({ message: successfulRes, user })
  } catch (error) {
    const CE = error as CustomError
    res.status(CE.statusCode).send({ error: CE.message })
  }
}
