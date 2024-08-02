import { Request, Response } from 'express'
import createUser from '../../controller/User/createUser'
import { successfulRes } from '../../utils/const'
import { UserResponse } from '../../types'

export const createUserHandler = async (req: Request, res: Response<UserResponse>): Promise<void> => {
  const { userName, pin }: { userName: string, pin: number } = req.body
  try {
    const user = await createUser({ userName, pin })
    res.send({ message: successfulRes, user })
  } catch (error) {
    const response = `El nombre ${userName}, ya existe en la base de datos, por favor intente con otro nombre.`
    res.status(500).send({ message: response })
  }
}
