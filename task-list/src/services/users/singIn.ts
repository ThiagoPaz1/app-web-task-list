import { instance } from '../instance'

// Types
import { UserResponse } from '../../@types'

export async function singIn(email: string, password: string) {
  try {
    const body = {email, password}
    return await instance().post<UserResponse>(`/user/login`, body)
  } catch (error) {
    return error
  }
}