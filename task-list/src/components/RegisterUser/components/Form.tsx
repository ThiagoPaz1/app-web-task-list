import { useState, useEffect } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

// Types
import { FormProps, ErrorInFields, UserData } from '../types'
import { ChangeInput } from '../../../@types'

// Styles and images
import styles from '../styles/form.module.css'

const defautlValuesErrorInField: ErrorInFields = {
  name: 'notVerified',
  email: 'notVerified',
  password: 'notVerified'
}

export function Form({ createUser }: FormProps) {
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const [errorInField, setErrorInField] = useState<ErrorInFields>(defautlValuesErrorInField)

  useEffect(() => {
    validateFieldsValues(userData)
  }, [userData])

  function handleChange(event: ChangeInput): void {
    const { value, name } = event.target

    setUserData({
      ...userData,
      [name]: value
    })
  }

  function validateFieldsValues(userData: UserData): void {
    const { name, email, password } = userData
    const checkEmail = errorInField.email === 'errorFound' || errorInField.email === 'verifiedOk'
    const validateEmail = /\S+@\S+\.\S+/

    if (name?.length < 2) {
      setErrorInField({
        ...errorInField,
        name: 'errorFound'
      })
    } else if (errorInField.name !== 'verifiedOk' && name?.length >= 2) {
      setErrorInField({
        ...errorInField,
        name: 'verifiedOk'
      })
    }

    if (email && !validateEmail.test(email)) {
      setErrorInField({
        ...errorInField,
        email: 'errorFound'
      })
    }
    else if (checkEmail && !email) {
      setErrorInField({
        ...errorInField,
        email: 'errorFound'
      })
    }
    else if (errorInField.email !== 'verifiedOk' && validateEmail.test(email)) {
      setErrorInField({
        ...errorInField,
        email: 'verifiedOk'
      })
    }

    if (password?.length < 6) {
      setErrorInField({
        ...errorInField,
        password: 'errorFound'
      })
    } else if (errorInField.password !== 'verifiedOk' && password?.length >= 6) {
      setErrorInField({
        ...errorInField,
        password: 'verifiedOk'
      })

    }
  }

  function buttonDisabled(): boolean {
    const foundErrorFieldsValues = Object.values(errorInField).find(i => i === 'notVerified' || i === 'errorFound')
    if (foundErrorFieldsValues) {
      return true
    } else {
      return false
    }
  }

  function handleRegisterUser() {
    createUser(userData)
  }

  return (
    <form className={styles.containerForm}>
      <TextField
        value={userData.name}
        id="outlined-basic"
        name="name"
        label="Digite seu nome"
        variant="outlined"
        margin="normal"
        size="small"
        error={errorInField.name === 'errorFound'}
        helperText={(errorInField.name === 'errorFound') && "O nome precisa ter ao menos 2 caracteres"}
        onChange={(event: ChangeInput) => handleChange(event)}
        fullWidth
      />

      <TextField
        value={userData.email}
        id="outlined-basic"
        name="email"
        label="Digite seu e-mail"
        variant="outlined"
        margin="normal"
        size="small"
        error={errorInField.email === 'errorFound'}
        helperText={(errorInField.email === 'errorFound') && "Digite um e-mail válido"}
        onChange={(event: ChangeInput) => handleChange(event)}
        fullWidth
      />

      <TextField
        value={userData.password}
        id="outlined-basic"
        name="password"
        type="password"
        margin="normal"
        label="Digite uma senha"
        variant="outlined"
        size="small"
        error={errorInField.password === 'errorFound'}
        helperText={(errorInField.password === 'errorFound') && "A senha precisa ter ao menos 6 caracteres"}
        onChange={(event: ChangeInput) => handleChange(event)}
        fullWidth
      />

      <div className={styles.containerButtonRegister}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={handleRegisterUser}
          disabled={buttonDisabled() ? true : false}
        >
          <span className={styles.buttonRegister}>
            cadastrar
          </span>
        </Button>
      </div>
    </form>
  )
}