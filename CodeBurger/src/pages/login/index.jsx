import {Container, LoginImage, ContainerItens, Label, Input, Button, SignInLink  } from './styles';
import LoginImg  from '../../assets/login_img.svg'
import LogoImg  from '../../assets/logo.svg'

export default function Login() {
  return (
    <>
      <Container>
        <LoginImage src={LoginImg}/>
        <ContainerItens>
          <img src={LogoImg}/>
          <h1>Login</h1>
          <Label>Email</Label>
          <Input />
          <Label>Senha</Label>
          <Input />
          <Button>Sign In</Button>
          <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
        </ContainerItens>
      </Container>
    </>
  )
}
