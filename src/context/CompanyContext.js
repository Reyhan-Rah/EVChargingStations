import createDataContext from './createDataContext';
import userApi from '../api/user';
import AsyncStorage from '@react-native-community/async-storage';

const companyReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_companies':
      return {...state, companies: action.payload};
    case 'fetch_child_companies':
      return {...state, company: action.payload};
    default:
      return state;
  }
};

const fetchCompanies = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await userApi.get(`/Companies?access_token=${token}`);
  dispatch({ type: 'fetch_companies', payload: response.data });
};

const fetchChildCompanies = dispatch => async ( itemId ) => {
  const token = await AsyncStorage.getItem('token');
  const response = await userApi.post(
    `/Companies/getWithChildCompany?access_token=${token}`,
    { company_id: itemId }
  );

  dispatch({ type: 'fetch_child_companies', payload: response.data.result }); 
};

export const { Provider, Context } = createDataContext(
  companyReducer,
  { fetchCompanies, fetchChildCompanies },
  {companies:'', company:[]}
);
