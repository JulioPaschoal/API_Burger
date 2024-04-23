import { useForm } from "react-hook-form"
import { Container, LoginImage, ContainerItens, Label, Input, Button, SignInLink  } from './styles';
import LoginImg  from '../../assets/login_img.svg'
import LogoImg  from '../../assets/logo.svg'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <Container>
        <LoginImage src={LoginImg}/>
        <ContainerItens>
          <img src={LogoImg}/>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <Input {...register("e-mail")}/>
            <Label>Senha</Label>
            <Input type="password" {...register("password")}/>
            <Button type="submit">Sign In</Button>
          </form>
          <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
        </ContainerItens>
      </Container>
    </>
  )
}
