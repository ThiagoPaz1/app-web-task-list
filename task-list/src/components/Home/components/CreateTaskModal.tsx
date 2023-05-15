import { useState, useEffect } from 'react'
import { 
  Modal,
  Button,
  TextField,
  CircularProgress
} from '@mui/material'

// Services
import { createNewTask } from '../../../services/tasks'

// Types
import { CreateTaskModalProps, TaskData, ErrorInFields } from '../types'
import { ChangeInput } from '../../../@types'

// Styles and images
import styles from '../styles/createTaskModal.module.css'

const defautlValuesErrorInField: ErrorInFields = {
  title: 'notVerified',
  description: 'notVerified',
}

export function CreateTaskModal({ openModal, closeModal, token }: CreateTaskModalProps) {
  const [taskData, setTaskData] = useState<TaskData>({} as TaskData)
  const [errorInField, setErrorInField] = useState<ErrorInFields>(defautlValuesErrorInField)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    validateFieldsValues(taskData)
  }, [taskData])

  function handleChange(event: ChangeInput): void {
    const { value, name } = event.target

    setTaskData({
      ...taskData,
      [name]: value
    })
  }

  function validateFieldsValues(taskData: TaskData) {
    const { title, description } = taskData

    if (title?.length < 2) {
      setErrorInField({
        ...errorInField,
        title: 'errorFound'
      })
    } else if (errorInField.title !== 'verifiedOk' && title?.length >= 2) {
      setErrorInField({
        ...errorInField,
        title: 'verifiedOk'
      })
    }

    if (description?.length < 2) {
      setErrorInField({
        ...errorInField,
        description: 'errorFound'
      })
    } else if (errorInField.description !== 'verifiedOk' && description?.length >= 2) {
      setErrorInField({
        ...errorInField,
        description: 'verifiedOk'
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

  async function handleCreateNewTask() {
    setIsLoading(true)

    await createNewTask(taskData, token)

    setIsLoading(false)
  }

  return (
    <Modal open={openModal} onClose={closeModal}>
      <div className={styles.containerCreateTaskModal}>
        <h2>
          Crie sua tarefa
        </h2>

        <form>
          <TextField
            id="outlined-basic"
            name="title"
            // margin="normal"
            label="Digite um título"
            variant="outlined"
            size="small"
            error={errorInField.title === 'errorFound'}
            helperText={(errorInField.title === 'errorFound') && "O título precisa ter ao menos 2 caracteres"}
            onChange={(event: ChangeInput) => handleChange(event)}
            sx={{ width: '70%'}}
          />

          <TextField
            id="outlined-basic"
            name="description"
            margin="dense"
            label="Digite uma descrição"
            variant="outlined"
            size="small"
            error={errorInField.description === 'errorFound'}
            helperText={(errorInField.description === 'errorFound') && "A descrição precisa ter ao menos 2 caracteres"}
            onChange={(event: ChangeInput) => handleChange(event)}
            sx={{ width: '70%'}}
          />

          {
            isLoading ?
              <CircularProgress /> :
              <Button
                color="success"
                variant="contained"
                onClick={handleCreateNewTask}
                disabled={buttonDisabled()}
                sx={{ 
                  width: '40%',
                  marginTop: '1rem',
                  fontWeight: 'bolder',
                }}
              >
                Criar tarefa
              </Button>
          }
        </form>
      </div>
    </Modal>
  )
}