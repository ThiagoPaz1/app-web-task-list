import { useEffect, useState } from 'react'
import { Button } from '@mui/material'

// Components
import { Profile } from './components/Profile'
import { CreateTaskModal } from './components/CreateTaskModal'

// Hooks and contexts
import { useUserDataSession } from '../../hooks/useUserDataSession'

// Styles and images
import styles from './styles/home.module.css'

export function Home() {
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false)
  const { verifyAuthentication, userData, token } = useUserDataSession()

  useEffect(() => {
    verifyAuthentication()
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
          sx={{fontWeight: 'bolder'}}
        >
          Criar nova tarefa
        </Button>
      </div>


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