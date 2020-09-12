import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://neocardbackend.herokuapp.com/api'
});

export default instance;
