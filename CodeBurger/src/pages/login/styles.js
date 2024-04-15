import styled from 'styled-components';
//import Background from '../../assets/background.svg'


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background:  #F4F4F4;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
height: 70%;
`
export const ContainerItens = styled.div`
border-radius: 0 10px 10px 0;
background: #373737;
box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
height: 70%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;

h1{
color: #FFF;
font-family: 'Roboto';
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
margin-top: 100px;

}

`
export const Label = styled.p`
color: #FFF;
font-family: 'Roboto';
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 28px;
margin-bottom: 5px;
`
export const Input = styled.input`
width: 391.416px;
height: 38.319px;
border-radius: 5px;
background: #FFF;
box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
border: none;
padding-left: 10px;
`
export const Button = styled.button`
width: 182.81px;
height: 36.129px;
background: #9758A6;
margin-top: 67px;
border-radius: 30px;
border: none;
color: #EEE;
text-align: center;
font-family: 'Roboto';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

&:hover{
  opacity: 0.8
}

&:active {
  opacity: 0.6;
}

`

export const SignInLink = styled.p`
margin-top: 25px;
color: #FFF;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: normal;

a{
  cursor: pointer;
  text-decoration: underline
}
`
