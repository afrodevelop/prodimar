import axios from 'axios'

export const syhApi = axios.create({
  baseURL: 'https://www.syhcomputacion.com/pedidosMovil/api/rest/v1.0/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'a16ced7081c20168cfff4736d9d8003aca232d6f'
  },
  timeout: 10000,
  withCredentials: true,
})
