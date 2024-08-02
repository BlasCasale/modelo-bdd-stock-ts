import { User } from '../../db'
import { UserT } from '../../types'

const createUser = async ({ userName, pin }: { userName: string, pin: number }): Promise<UserT> => {
  const user = await User.create({ userName, pin }) as unknown as UserT

  return user
}

export default createUser
