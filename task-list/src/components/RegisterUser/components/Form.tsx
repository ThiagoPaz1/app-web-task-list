import { useState, ChangeEvent } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

// Types
import { FormProps, ErrorInField } from '../types'

// Styles and images
import styles from '../styles/form.module.css'

export function Form({ handleCreateUser }: FormProps) {
  const [errorInField, setErrorInField] = useState<ErrorInField>({} as ErrorInField)

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    // const { value, name }  = event.target


  }

  return (
    <form className={styles.containerForm}>
      <TextField
        id="outlined-basic"
        name="name"
        label="Digite seu nome"
        variant="outlined"
        error={errorInField.name}
        helperText={errorInField.name && "O nome precisa ter ao menos 2 caracteres"}
        fullWidth
      />

      <TextField
        id="outlined-basic"
        name="email"
        label="Digite seu e-mail"
        variant="outlined"
        error={errorInField.email}
        helperText={errorInField.email && "Digite um e-mail válido"}
        fullWidth
      />

      <TextField
        id="outlined-basic"
        name="password"
        label="Digite uma senha"
        variant="outlined"
        error={errorInField.password}
        helperText={errorInField.password && "A senha precisa ter ao menos 6 caracteres"}
        fullWidth
      />

      <Button
        variant="contained"
        onClick={() => console.log('')}
        // onClick={handleCreateUser}
      >
        cadastrar
      </Button>
    </form>
  )
}