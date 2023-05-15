import { useEffect } from 'react'

// Components
import { Profile } from './components/Profile' 

// Hooks and contexts
import { useUserDataSession } from '../../hooks/useUserDataSession'

// Styles and images
import styles from './styles/home.module.css'

export function Home() {
  const { verifyAuthentication, userData } = useUserDataSession()

  useEffect(() => {
    verifyAuthentication()
  }, [])

  return (
    <div className={styles.containerHome}>
      <Profile userName={userData?.name as string} />
      <h1>
        Gerenciador de tarefas
      </h1>
    </div>
  )
}