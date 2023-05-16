import { TasksWithPagination } from '../../../@types'

export type TaskListProps = {
  taskData: TasksWithPagination
  openEditTaskModal: (id: string, name: string, description: string) => void
} 