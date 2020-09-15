import createDataContext from './createDataContext';
import userApi from '../api/user';
import AsyncStorage from '@react-native-community/async-storage';

const stationReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_stations':
      return action.payload;
    default:
      return state;
  }
};

const fetchStations = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await userApi.get(`/Stations?access_token=${token}`);
  dispatch({type: 'fetch_stations', payload: response.data});
};

export const {Provider, Context} = createDataContext(
  stationReducer,
  {fetchStations},
  [],
);
