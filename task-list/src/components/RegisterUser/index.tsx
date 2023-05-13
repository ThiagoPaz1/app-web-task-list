// Components
import { Form } from './components/Form'

// Styles and images
import styles from './styles/register.module.css'  

export function RegisterUser() {
  function handleCreateUser(): void {
    'd'
  }

  return (
    <div className={styles.containerRegister}>
      <h1>
        Cadastro
      </h1>
      <input type="text" />
      <Form
        handleCreateUser={handleCreateUser}
      />
    </div>
  )
}