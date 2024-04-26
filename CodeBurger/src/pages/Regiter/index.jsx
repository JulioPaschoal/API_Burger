import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Container, RegisterImg, ContainerItens, Label, Input, SignInLink,ErrorMessage  } from './styles';
import RegisterImage  from '../../assets/register_img.svg'
import LogoImg  from '../../assets/logo.svg'
import api from '../../services/api';
import Button from '../../components/Button'

export default function Register() {

  // VALIDADO FORMULARIO \\
  const schema = Yup.object().shape({
    name: Yup.string('O seu nome é obrigatório')
      .required('O nome é obrigatŕio!'),
    email: Yup.string()
      .email('Digite um e-mail válido!')
      .required('O e-mail é obrigatŕio!'),
    password: Yup.string()
      .required('A senha é obrigatória!')
      .min(6, 'A senha deve ter no mínimo 6 digítos!'),
    confirmPassword: Yup.string()
      .required('Confirmação de senha é obrigatória!')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  });

  const { register,  handleSubmit,  formState: { errors }, } = useForm({
    resolver: yupResolver(schema),  });

    // LOGANDO NA APLICAÇÃO COM API \\
  const onSubmit = async clientData => {
    const res = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    });
    console.log(res);
  }

  return (
    <>
      <Container>
        <RegisterImg src={RegisterImage}/>
        <ContainerItens>
          <img src={LogoImg}/>
          <h1>Cadastre-se</h1>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label error={errors.name?.message}>Nome</Label>
            <Input type="text"{...register("name")} error={errors.name?.message}/>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            
            <Label error={errors.email?.message}>Email</Label>
            <Input type="email"{...register("email")} error={errors.email?.message}/>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label error={errors.password?.message}>Senha</Label>
            <Input type="password" {...register("password")} error={errors.password?.message}/>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Label error={errors.confirmPassword?.message}>Confirmar senha</Label>
            <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message}/>
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

            <Button type="submit" style={{marginTop: 25}}>Sign Up</Button>
          </form>
          <SignInLink>
          Já possui conta? <a>Sign In</a>
        </SignInLink>
        </ContainerItens>
      </Container>
    </>
  )
}
