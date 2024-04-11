import { useForm} from "react-hook-form"
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginImage, Button, Container, ContainerItens, Input, Label, SignInLink, ErrorMessage } from "./styles";
import LoginImg from '../../assets/lanche.svg'
import Logo from '../../assets/logo.svg'

export default function Login(){
  // VALIDANDO CAMPOS DO FORMULARIO \\
  const schema = Yup.object().shape({
    email: Yup.string()
    .email("Digite um e-mail válido!")
    .required("O e-mail é obrigatório!"),
    password: Yup.string()
    .required('A senha é obrigatória!')
    .min(6, "A senha deve ter no minimo 6 digitos!"),
  });

  const { register, handleSubmit,  formState: { errors }, } = useForm({ resolver: yupResolver(schema), })
  const onSubmit = (data) => console.log(data)
    return(
      
        <>
          <Container>
            <LoginImage src={LoginImg}/>
              <ContainerItens>
                <img src={Logo}/>
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Label>Email</Label>
                  <Input type="email" {...register("email")} error={errors.email?.message}/>
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                  <Label>Senha</Label>
                  <Input  type="password" {...register("password")} error={errors.password?.message}/>
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
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
