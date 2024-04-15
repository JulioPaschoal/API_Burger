import {Container, Background, ContainerItens, Label, Input, Button, SignInLink  } from './styles';
export default function Login() {
  return (
    <>
      <Container>
        <Background />
        <ContainerItens>
          <img />
          <h1>Login</h1>
          <Label>Email</Label>
          <Input />
          <Label>Senha</Label>
          <Input />
          <Button>Sign In</Button>
        </ContainerItens>
        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </Container>
    </>
  )
}
