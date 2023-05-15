import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Services
import { getAllTasksWithPagination } from '../services/tasks/getAllTasksWithPagination'

// Types
import { UserResponse } from '../@types'

type Authentication = 'isAuthenticated' | 'notAuthenticated'


export function useUserDataSession() {
  const [isAuthenticated, setIsAuthenticated] = useState<Authentication>()
  const getSessionData = localStorage.getItem('userDataSession')
  const sessionData = getSessionData ? JSON.parse(getSessionData) as UserResponse : {} as UserResponse
  const userData = sessionData.user
  const token = sessionData.token
  const navigate = useNavigate()

  useEffect(() => {
    checkAuthentication()
  }, [])

  useEffect(() => {
    verifyAuthentication()
  }, [isAuthenticated])

  async function checkAuthentication() {
    const data = await getAllTasksWithPagination('1', '10', token)

    if (!getSessionData) {
      setIsAuthenticated('notAuthenticated')
      return
    }

    if (data === 401) {
      setIsAuthenticated('notAuthenticated')
    } else {
      setIsAuthenticated('isAuthenticated')
    }
  }

  function verifyAuthentication(): void {
    if (isAuthenticated === 'notAuthenticated') {
      navigate('login')
    }
  }

  return {
    userData,
    verifyAuthentication
  }
}