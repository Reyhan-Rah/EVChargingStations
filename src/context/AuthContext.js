import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import userApi from '../api/user';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear-error-message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('Stations');
  } else {
    navigate('Signup');
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear-error-message' });
};

const signup = dispatch => async ({email, password}) => {
  try {
    const response = await userApi.post('/Users', { email, password });
    await AsyncStorage.setItem('token', response.data.id);
    dispatch({ type: 'signin', payload: response.data.id });

    navigate('Stations');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up',
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await userApi.post('/Users/login', { email, password });
    await AsyncStorage.setItem('token', response.data.id);
    dispatch({ type: 'signin', payload: response.data.id });

    navigate('Stations');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};

export const {Provider, Context} = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
