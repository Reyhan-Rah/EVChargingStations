import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: 'https://neocardbackend.herokuapp.com/api'
});

export default instance;
