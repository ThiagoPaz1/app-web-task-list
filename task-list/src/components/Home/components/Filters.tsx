import { useState } from 'react'
import { Button, TextField } from '@mui/material'

// Types
import { ChangeInput } from '../../../@types'

// Styles and images
import styles from '../styles/filters.module.css'

export function Filters() {
  const [searchTitle, setSearchTitle] = useState('')

  function handleChange(event: ChangeInput): void {
    const { value } = event.target

    setSearchTitle(value)
  }

  return (
    <div className={styles.containerFilters}>
      <h3>
        Filtros de pesquisa
      </h3>

      <div>
        <label>
          Busque por título
          <TextField
            id="outlined-basic"
            name="description"
            variant="outlined"
            size="small"
            onChange={(event: ChangeInput) => handleChange(event)}
            sx={{
              width: '15rem',
              alignSelf: 'end'
            }}
          />
        </label>

        <label>
          Data de criação
          <TextField
            type="date"
            id="outlined-basic"
            name="description"
            variant="outlined"
            size="small"
            onChange={(event: ChangeInput) => handleChange(event)}
            sx={{ width: '11rem' }}
          />
        </label>

        <Button
          variant="contained"
          sx={{
            alignSelf: 'end',
            padding: '0.5rem',
            marginLeft: '1rem',
            fontWeight: 'bolder'
          }}
        >
          Pesquisar
        </Button>
      </div>
    </div>
  )
}