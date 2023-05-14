import { useEffect } from 'react'
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
    const response = await createNewUser(user)
    console.log(await response.json())
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