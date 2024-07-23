import { Router, Request, Response } from 'express'
import { validatePinBody, validatePinQuery, validateUserNameBody, validateUserNameQuery } from '../utils/middlewareUser'
import { createUserHandler } from '../handler/createUserHandler'

const userRouter = Router()

userRouter.get('/getUser', [validateUserNameQuery, validatePinQuery], (_req: Request, res: Response): void => {
  res.send('Funciono')
})
userRouter.post('/createUser', [validateUserNameBody, validatePinBody], createUserHandler)

export default userRouter
