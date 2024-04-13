import { useForm} from "react-hook-form"
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterImage, Container, ContainerItens, Input, Label, SignInLink, ErrorMessage } from "./styles";
import RegiterImg from '../../assets/burger.svg'
import Logo from '../../assets/logo.svg'
import api from '../../services/api'
import Button from '../../components/Button/index';

export default function Login(){
  // VALIDANDO CAMPOS DO FORMULARIO \\
  const schema = Yup.object().shape({
    name: Yup.string()
    .required("Seu nome é obrigatório!"),
    email: Yup.string()
    .email("Digite um e-mail válido!")
    .required("O e-mail é obrigatório!"),
    password: Yup.string()
    .required('A senha é obrigatória!')
    .min(6, "A senha deve ter no minimo 6 digitos!"),
    confirmPassword: Yup.string()
    .required('As senhas não iguais!')
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais!'),
  });

  const { register, handleSubmit,  formState: { errors }, } = useForm({ resolver: yupResolver(schema), })
  const onSubmit = async clientData => {
    const res = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
    console.log(res)
  }
    return(
      
        <>
          <Container>
            <RegisterImage src={RegiterImg}/>
              <ContainerItens>
                <img src={Logo}/>
                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label error={errors.name?.message}>Name</Label>
                  <Input type="text" {...register("name")} error={errors.name?.message}/>
                  <ErrorMessage>{errors.name?.message}</ErrorMessage>

                  <Label error={errors.email?.message}>Email</Label>
                  <Input type="email" {...register("email")} error={errors.email?.message}/>
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>

                  <Label error={errors.password?.message}>Senha</Label>
                  <Input  type="password" {...register("password")} error={errors.password?.message}/>
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>

                  <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
                  <Input  type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message}/>
                  <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                  <Button type="submit" style={{marginTop: 25, marginBottom: 25 }}>
                    Sign Up</Button>
                </form>
                <SignInLink>
                  Já possui conta? <a>Sign In</a>
                </SignInLink>
                
              </ContainerItens>
          </Container>
        </>
    )
}
