import { useEffect, useState, useContext } from 'react'
import { Button } from '@mui/material'

// Components
import { Profile } from './components/Profile'
import { CreateTaskModal } from './components/CreateTaskModal'
import { TaskList } from './components/TaskList'

// Hooks and contexts
import { useUserDataSession } from '../../hooks/useUserDataSession'
import { TaskContext } from '../../context/taskContext'

// Styles and images
import styles from './styles/home.module.css'

export function Home() {
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false)
  const { verifyAuthentication, userData, token } = useUserDataSession()
  const { getTasks, tasks } = useContext(TaskContext)

  useEffect(() => {
    verifyAuthentication()
    getTasks()
  }, [])

  console.log("tarefas =>>>>>>>", tasks)

  return (
    <div className={styles.containerHome}>
      <Profile userName={userData?.name as string} />

      <h1>
        Gerenciador de tarefas
      </h1>

      <div>
        <Button
          variant="contained"
          onClick={() => setShowCreateTaskModal(true)}
          sx={{fontWeight: 'bolder'}}
        >
          Criar nova tarefa
        </Button>
      </div>

      <TaskList tasks={[]}/>

      {
        showCreateTaskModal &&
        <CreateTaskModal
          token={token}
          openModal={showCreateTaskModal}
          closeModal={() => setShowCreateTaskModal(false)}
        />
      }
    </div>
  )
}