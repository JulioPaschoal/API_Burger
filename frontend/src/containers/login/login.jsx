import { LoginImage, Button, Container, ContainerItens, Input, Label, SignInLink } from "./styles";
import LoginImg from '../../assets/lanche.svg'
import Logo from '../../assets/logo.svg'

export default function Login(){
    return(
        <>
          <Container>
            <LoginImage src={LoginImg}/>
            <ContainerItens>
              <img src={Logo}/>
              <h1>Login</h1>
              <Label>Email</Label>
              <Input/>
              <Label>Senha</Label>
              <Input/>
              <Button>Sign In</Button>
              <SignInLink>
                Não possui conta? <a>Sign Up</a>
              </SignInLink>
            </ContainerItens>
          </Container>
        </>
    )
}
