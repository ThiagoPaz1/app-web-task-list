import { instanceTask } from '../instance'

// Types
import { CreateUser } from '../../@types'

type TaskUpdate = Omit<CreateUser, 'passwords'>

export async function taskUpdate(token: string, id: string, body: TaskUpdate): Promise<void> {
  await instanceTask(token).put(`/task/${id}`, body)
}

