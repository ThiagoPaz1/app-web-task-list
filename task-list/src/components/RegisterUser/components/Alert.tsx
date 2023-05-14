import { Snackbar, Alert } from '@mui/material'

// Types
import { AlertProps } from '../types'

export function AlertComponent({ open, handleClose }: AlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
      >
        Este email já esta sendo usado
      </Alert>
    </Snackbar>
  )
}