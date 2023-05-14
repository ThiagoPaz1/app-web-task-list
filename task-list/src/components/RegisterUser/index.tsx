import { CircularProgress } from '@mui/material'

// Components
import { Form } from './components/Form'

// Services
import { createNewUser } from '../../services/users'

// Types
import { UserData } from './types'

// Styles and images
import styles from './styles/register.module.css'  

export function RegisterUser() {
  async function handleCreateUser(user: UserData): Promise<void> {
    await createNewUser(user)
  }

  return (
    <div className={styles.containerRegister}>
      <h1>
        Cadastro
      </h1>
      <Form createUser={handleCreateUser}/>
    </div>
  )
}