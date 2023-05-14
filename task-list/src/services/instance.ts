import axios, { AxiosInstance } from 'axios'

export function instance(token?: string): AxiosInstance {
  return axios.create({
    baseURL: 'http://localhost:3001/',
    headers: { 'authorization': token }
  })
}