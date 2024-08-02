import { User } from '../../db'
import { UserT } from '../../types'

const getUser = async ({ userName, pin }: { userName: string, pin: string }): Promise<UserT> => {
  const user: UserT = await User.findOne({ where: { userName } }) as unknown as UserT
  if (user === undefined) throw new Error(`No se encontro un usuario con el nombre ${userName}`)

  const num = Number(pin)

  if (num !== user.pin) throw new Error('El pin no coincide con un usuario en la base de datos')

  return user
}

export default getUser
