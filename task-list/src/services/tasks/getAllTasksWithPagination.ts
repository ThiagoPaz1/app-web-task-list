import { AxiosError } from 'axios'

import { instanceTask } from '../instance'

// Types
import { Task } from '../../@types'

type TasksWithPagination = {
  tasksTotal: number
  totalPages: number
  tasks: Task[]
}

type ResposeCode = number

export async function getAllTasksWithPagination(
  token: string,
  page?: string,
  pageSize?: string,
  ): Promise<TasksWithPagination | ResposeCode> {
  try {
    const response = await instanceTask(token).get(`task/getAll?page=${page}&pageSize=${pageSize}`)
    return await response.data
  } catch (error) {
    const responseError = error as AxiosError
    const responseCode = responseError.response?.status as number
    return responseCode
  }
}