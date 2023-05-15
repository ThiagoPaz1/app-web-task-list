import { useEffect, useState, useContext } from 'react'
import { Button, CircularProgress } from '@mui/material'

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
  const [showEditTaskModal, setShowEditTaskModal] = useState(false)
  const { verifyAuthentication, userData, token } = useUserDataSession()
  const { getTasks, tasks } = useContext(TaskContext)

  useEffect(() => {
    verifyAuthentication()
    getTasks()
  }, [])

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
          sx={{fontWeight: 'bolder', marginTop: '2rem'}}
        >
          Criar nova tarefa
        </Button>
      </div>

      {
        tasks?.tasks ?
        <TaskList taskData={tasks}/> :
        <CircularProgress size={80} sx={{marginTop: '5rem'}}/>
      }

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