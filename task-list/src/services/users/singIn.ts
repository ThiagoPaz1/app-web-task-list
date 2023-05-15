import { instance } from '../instance'

// Types
import { UserResponse } from '../../@types'

export async function singIn(email: string, password: string): Promise<UserResponse | undefined> {
  try {
    const body = {email, password}
    const response = await instance().post(`/user/login`, body)
    return await response.data
  } catch (error) {
    return undefined
  }
}