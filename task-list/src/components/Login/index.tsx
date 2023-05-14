
// Components
import { FormLogin } from "./components/FormLogin" 

// Services
import { singIn } from "../../services/users/singIn"

export function Login() {
  function handleSingIn(email: string, password: string) {
    0
  }

  return (
    <FormLogin singIn={handleSingIn}/>
  )
}