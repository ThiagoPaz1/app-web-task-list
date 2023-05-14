import { Snackbar, Alert } from '@mui/material'

// Types
import { AlertProps } from './types'

export function AlertComponent({ description, open, handleClose, severity }: AlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
      >
        { description }
      </Alert>
    </Snackbar>
  )
}