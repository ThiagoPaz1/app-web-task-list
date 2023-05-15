import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Paper,
  TableCell,
  TableHead
} from '@mui/material'

// Components
import { TableActions } from './TableActions'

// Types
import { TaskListProps } from '../types/taskList'

export function TaskList({ tasks }: TaskListProps) {
  return (
    <>
      {
        !tasks.length ?
          <TableContainer
            component={Paper}
            sx={{marginTop: '5rem'}}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Título</TableCell>
                  <TableCell align="center">Descrição</TableCell>
                  <TableCell align="center">Data de criação</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.title}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.created_at}</TableCell>
                    <TableCell>
                      <TableActions />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> :
          <h1>
            Sem tarefas criadas no momento :/
          </h1>
      }
    </>
  )
}