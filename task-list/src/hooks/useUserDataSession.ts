import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Services
import { getAllTasksWithPagination } from '../services/tasks/getAllTasksWithPagination'

// Types
import { UserResponse } from '../@types'

type Authentication = 'isAuthenticated' | 'notAuthenticated'

type UserData = Omit<UserResponse, 'token'>

export function useUserDataSession() {
  const [isAuthenticated, setIsAuthenticated] = useState<Authentication>()
  const { user, token } = JSON.parse(localStorage.getItem('userDataSession') as string)
  const userData = user as UserData 
  const navigate = useNavigate()

  useEffect(() => {
    checkAuthentication()
  }, [])

  async function checkAuthentication() {
    const data = await getAllTasksWithPagination('1', '10', token)

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
    user: userData,
    verifyAuthentication
  }
}