import { instance } from '../instance'

// Types
import { CreateUser } from '../../@types'

export async function createNewUser(user: CreateUser): Promise<void> {
  await instance().post('/user', user)
}