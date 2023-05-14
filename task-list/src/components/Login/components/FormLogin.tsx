import { useState } from 'react'
import { TextField, Button } from '@mui/material'

// Types
import { FormLoginProps, UserDataForLogin, ErrorInFields } from '../types'
import { ChangeInput } from '../../../@types'

// Styles
import styles from '../styles/formLogin.module.css'

export function FormLogin({ singIn }: FormLoginProps) {
  const [userDataForLogin, setUserDataForLogin] = useState<UserDataForLogin>({} as UserDataForLogin)
  const [errorInFields, setErrorInFields] = useState<ErrorInFields>({} as ErrorInFields)

  function handleChange(event: ChangeInput): void {
    const { value, name } = event.target

    setUserDataForLogin({
      ...userDataForLogin,
      [name]: value
    })
  }

  function verifyIsOkFieldsValues(userData: UserDataForLogin): boolean {
    const { email, password } = userData
    
    if (!email) {
      setErrorInFields({
        ...errorInFields,
        email: userData.email
      })
    }

    if (!password) {
      setErrorInFields({
        ...errorInFields,
        password: userData.password
      })
    }

    if (!email || !password) {
      return false
    } else {
      return true
    }
  }

  function handleSingIn() {
    if (verifyIsOkFieldsValues(userDataForLogin)) {
      singIn(userDataForLogin.email, userDataForLogin.password)
    }
  }

  return (
    <form className={styles.containerFormLogin}>
      <TextField
        id="outlined-basic"
        name="email"
        label="Digite seu e-mail"
        variant="outlined"
        margin="normal"
        size="small"

        onChange={(event: ChangeInput) => handleChange(event)}
        fullWidth
      />

      <TextField
        id="outlined-basic"
        name="password"
        type="password"
        margin="normal"
        label="Digite uma senha"
        variant="outlined"
        size="small"
        onChange={(event: ChangeInput) => handleChange(event)}
        fullWidth
      />

      <Button
        size="small"
        variant="contained"
        onClick={handleSingIn}
        sx={{
          width: '15rem',
          marginTop: '1rem'
        }}
      >
        Entrar
      </Button>
    </form>
  )
}