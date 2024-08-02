import { Router } from 'express'
import { validateIdBody, validatePinBody, validatePinQuery, validateUserNameBody, validateUserNameQuery } from '../utils/middlewareUser'
import { createUserHandler } from '../handler/User/createUserHandler'
import { getUserHandler } from '../handler/User/getUserHandler'

const userRouter = Router()

userRouter.get('/getUser', [validateUserNameQuery, validatePinQuery], getUserHandler)
userRouter.post('/createUser', [validateUserNameBody, validatePinBody], createUserHandler)
userRouter.put('/updateUser', [validatePinBody, validateUserNameBody, validateIdBody])
export default userRouter
