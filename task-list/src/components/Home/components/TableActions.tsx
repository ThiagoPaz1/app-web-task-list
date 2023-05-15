import { Button } from '@mui/material'

export function TableActions() {
  return (
    <div>
      <Button variant="contained">
        Editar
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{marginLeft: '1rem'}}
      >
        Apagar
      </Button>
    </div>
  )
}