import { instance } from '../instance'

// Types
import { UserResponse } from '../../@types'

export async function getUserByEmail(email: string) {
  return await instance().get<UserResponse>(`/user/${email}`)
}