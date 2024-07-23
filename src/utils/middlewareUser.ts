import { NextFunction, Request, Response } from 'express'
import { regId, regName } from './const'

export const validateUserNameQuery = (req: Request, res: Response, next: NextFunction): void => {
  const { userName } = req.query

  if (!userName) throw new Error('Por favor envie el nombre de usuario.')

  if (typeof userName !== 'string') throw new Error('Se debe enviar unicamente una cadena de textos.')

  if (!regName.test(userName)) throw new Error('El nombre solo debe contener letras (mayúsculas y minúsculas) y sin espacios.')

  next()
}

export const validateUserNameBody = (req: Request, res: Response, next: NextFunction): void => {
  const { userName } = req.body

  if (!userName) throw new Error('Por favor envie el nombre del usuario.')

  if (typeof userName !== 'string') throw new Error('Se debe enviar unicamente una cadena de texto.')

  if (!regName.test(userName)) throw new Error('El nombre solo debe contener letras (mayúsculas y minúsculas) y sin espacios.')

  next()
}

export const validatePinQuery = (req: Request, res: Response, next: NextFunction): void => {
  const { pin } = req.query

  if (!pin) throw new Error('Por favor envie el PIN para iniciar sesion.')

  const num = Number(pin)

  if (num < 0) throw new Error('El PIN unicamente debe ser mayor a 0.')

  next()
}

export const validatePinBody = (req: Request, res: Response, next: NextFunction): void => {
  const { pin } = req.body

  if (!pin) throw new Error('Por favor envie el PIN para continuar.')

  const num = Number(pin)

  if (num < 0) throw new Error('El PIN unicamente debe ser mayor a 0.')

  next()
}

export const validateIdBody = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.body

  if (!id) throw new Error('Por favor envie el ID para continuar.')

  if (typeof id !== 'string') throw new Error('El ID debe ser de tipo cadena de texto.')

  if (!regId.test(id)) throw new Error('El ID enviado no respeta el formato UUID.')

  next()
}
