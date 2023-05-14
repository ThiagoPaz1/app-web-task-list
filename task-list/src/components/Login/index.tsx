import { useState } from 'react'

// Components
import { FormLogin } from './components/FormLogin'
import { AlertComponent } from '../Alert'

// Services
import { singIn } from '../../services/users/singIn'

// Types
import { FoundError } from './types'

// Styles and images
import styles from './styles/login.module.css'

export function Login() {
  const [foundError, setFoundError] = useState<FoundError>({} as FoundError)

  function handleSingIn(email: string, password: string) {
    0
  }

  return (
    <div className={styles.containerLogin}>
      {
        foundError?.found &&
          <AlertComponent
            open={foundError?.found}
            handleClose={() => setFoundError({ ...foundError, found: false })}
            severity="error"
            description={foundError?.descriptionError}
          />
        }

        <h1>
          Login
        </h1>
        <FormLogin singIn={handleSingIn} foundError={setFoundError} />
    </div>
  )
}