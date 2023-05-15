import { AxiosError } from 'axios'

import { instance } from '../instance'

// Types
import { Task } from '../../@types'

type TasksWithPagination = {
  tasksTotal: number
  totalPages: number
  tasks: Task[]
}

type ResposeCode = number

export async function getAllTasksWithPagination(
  page?: string,
  pageSize?: string,
  token?: string): Promise<TasksWithPagination | ResposeCode> {
  try {
    const response = await instance(token).get(`task/getAll?page=${page}&pageSize=${pageSize}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    const responseError = error as AxiosError
    const responseCode = responseError.response?.status as number
    console.log(responseCode)
    return responseCode
  }
}