import { useEffect, useState, useContext } from 'react'
import { Button, CircularProgress } from '@mui/material'

// Components
import { Profile } from './components/Profile'
import { CreateTaskModal } from './components/CreateTaskModal'
import { TaskList } from './components/TaskList'

// Components
import { EditTaskModal } from './components/EditTaskModal'

// Hooks and contexts
import { useUserDataSession } from '../../hooks/useUserDataSession'
import { TaskContext } from '../../context/taskContext'
import { EditTaskModalData } from './types'

// Styles and images
import styles from './styles/home.module.css'

export function Home() {
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false)
  const [showEditTaskModal, setShowEditTaskModal] = useState(false)
  const [editTaskModalData, setEditTaskModalData] = useState<EditTaskModalData>({} as EditTaskModalData)
  const { verifyAuthentication, userData, token } = useUserDataSession()
  const { getTasks, tasks } = useContext(TaskContext)

  useEffect(() => {
    verifyAuthentication()
    getTasks()
  }, [])

  function handleEditTaskModalData(id: string, title: string, description: string) {
    setShowEditTaskModal(true)
    setEditTaskModalData({id, title, description})
  }

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
        <TaskList
          taskData={tasks}
          openEditTaskModal={handleEditTaskModalData}
        /> :
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


      {
        showEditTaskModal &&
        <EditTaskModal
          id={editTaskModalData?.id}
          title={editTaskModalData?.title}
          description={editTaskModalData?.description}
          open={showEditTaskModal}
          onClose={() => setShowEditTaskModal(false)}
        />
      }
    </div>
  )
}