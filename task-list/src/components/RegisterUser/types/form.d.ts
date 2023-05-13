export type FormProps = {
  handleCreateUser: (user: UserData) => void
}

export type UserData = {
  name: string
  email: string
  password: string
}

export type ErrorInField = {
  name: boolean
  email: boolean
  password: boolean
}
