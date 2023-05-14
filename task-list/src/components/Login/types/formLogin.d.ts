export type FormLoginProps = {
  singIn: (email: string, password: string) => void
}

export type UserDataForLogin = {
  email: string
  password: string
}

export type ErrorInFields = {
  email: string
  password: string
}