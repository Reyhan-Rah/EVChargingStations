import createDataContext from './createDataContext';
import userApi from '../api/user';
import AsyncStorage from '@react-native-community/async-storage';

const companyReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_companies':
      return { ...state, companies: action.payload };
    case 'loading':
      return { ...state, isLoading: true }
    case 'fetch_child_companies': {
      const newCompanies = state.companies.map(item => {
        if (item.id !== action.payload[0]._id) {
          // This isn't the item we care about - keep it as-is
          return item
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...action.payload[0]
        }
      }
      )
      return {
        ...state,
        companies: newCompanies,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

const fetchCompanies = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await userApi.get(`/Companies?access_token=${token}`);
  dispatch({ type: 'fetch_companies', payload: response.data });
};

const fetchChildCompanies = dispatch => async itemId => {
  dispatch({ type: 'loading' })
  const token = await AsyncStorage.getItem('token');
  const response = await userApi.post(
    `/Companies/getWithChildCompany?access_token=${token}`,
    { company_id: itemId },
  );

  dispatch({ type: 'fetch_child_companies', payload: response.data.result });
};

export const { Provider, Context } = createDataContext(
  companyReducer,
  { fetchCompanies, fetchChildCompanies },
  { companies: null, isLoading: false },
);
