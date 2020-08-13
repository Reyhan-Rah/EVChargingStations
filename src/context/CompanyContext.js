import createDataContext from './createDataContext';
import userApi from '../api/user';
import AsyncStorage from '@react-native-community/async-storage';

const companyReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_companies':
      return action.payload;
    default:
      return state;
  }
};

const fetchCompanies = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await userApi.get(`/Companies?access_token=${token}`);
  dispatch ({ type: 'fetch_companies', payload: response.data });
};

export const { Provider, Context } = createDataContext(
  companyReducer,
  { fetchCompanies },
  []
);
