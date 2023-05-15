import { useEffect } from 'react'

import { getAllTasksWithPagination } from '../../services/tasks/getAllTasksWithPagination'

export function Home() {
  useEffect(() => {
    request()
  }, [])
  
  async function request() {
    const {token} = JSON.parse(localStorage.getItem('userDataSession') as string)

    const data = await getAllTasksWithPagination('1', '10', token)
  }

  return (
    <div>

      <h1>
        Gerenciador de tarefas
      </h1>
    </div>
  )
}