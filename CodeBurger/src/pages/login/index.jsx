import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Container, LoginImage, ContainerItens, Label, Input, SignInLink,ErrorMessage  } from './styles';
import LoginImg  from '../../assets/login_img.svg'
import LogoImg  from '../../assets/logo.svg'
import api from '../../services/api';
import Button from '../../components/Button'

export default function Login() {

  // VALIDADO FORMULARIO \\
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido!')
      .required('O e-mail é obrigatŕio!'),
    password: Yup.string()
      .required('A senha é obrigatória!')
      .min(6, 'A senha deve ter no mínimo 6 digítos!'),
  });

  const { register,  handleSubmit,  formState: { errors }, } = useForm({
    resolver: yupResolver(schema),  });

    // LOGANDO NA APLICAÇÃO COM API \\
  const onSubmit = async clientData => {
    try {
      const { status } = await api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      },
      { validateStatus: () => true, }
    ); 
    if (status === 201 || status === 200){
      toast.success('Seja bem-vido(a)')
    }else if (status === 401) {
      toast.error('E-mail ou senha incorretos')
    } else {
      throw new Error()
    }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente')
    }
    
    console.log(res);
  }
  return (
    <>
      <Container>
        <LoginImage src={LoginImg}/>
        <ContainerItens>
          <img src={LogoImg}/>
          <h1>Login</h1>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <Input type="email"{...register("email")} error={errors.email?.message}/>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <Label>Senha</Label>
            <Input type="password" {...register("password")} error={errors.password?.message}/>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <Button type="submit" style={{marginTop: 70}}>Sign In</Button>
          </form>
          <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
        </ContainerItens>
      </Container>
    </>
  )
}
