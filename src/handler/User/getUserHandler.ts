import { Request, Response } from 'express'
import { CustomError, UserResponse } from '../../types'
import getUser from '../../controller/User/getUser'

export const getUserHandler = async (req: Request, res: Response<UserResponse>): Promise<void> => {
  try {
    const userName = req.query.userName as string
    const pin = req.query.pin as string
    const user = await getUser({ userName, pin })
    res.status(200).send({ user })
  } catch (error) {
    const CE = error as CustomError
    res.status(500).send({ message: CE.message })
  }
}
