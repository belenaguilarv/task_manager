import axios from 'axios'

// nos permite decirle a que dominio base va a consultar siempre 
const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true
})

export default instance