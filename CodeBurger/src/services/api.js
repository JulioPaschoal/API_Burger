import axios from 'axios';

// CRIANDO A CONEXAO \\
const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3000'
});

export default apiCodeBurger;
