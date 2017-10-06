import axios from 'axios';
import jwtDecode from 'jwt-decode'
import { 
  MANAGEMENT_ACTION_FOO,
  ORGANISATION_ACTION_SET,
  AUTH_ACTION_SET_ORGANIZATION,
  AUTH_ACTION_SET_USER,
  AUTH_ACTION_SET_TOKEN,
  AUTH_ACTION_LOGIN,
  SNACKBAR_OPEN,
  SNACKBAR_CLOSE
} from './types';

const baseUrl = 'http://localhost:50865'

export const setCredentials = ({token, userName, displayName, role}) => async dispatch => {
  dispatch(
    {
      type: AUTH_ACTION_SET_TOKEN,
      payload: {
        token
      }
    }
  )

  dispatch(
    {
      type: AUTH_ACTION_SET_USER, 
      payload: {
        userName,
        displayName,
        role
      }
  })
}

export const clearCredentials =() => dispatch => {
  dispatch(
    {
      type: AUTH_ACTION_SET_TOKEN,
      payload: {
        token: null
      }
    }
  )

  dispatch(
    {
      type: AUTH_ACTION_SET_USER, 
      payload: {
        userName: null,
        displayName: null,
        role: null,
      }
  })
}

// export const fetchUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user');

//   dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const handleToken = token => async dispatch => {
//   const res = await axios.post('/api/stripe', token);

//   dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const submitSurvey = (values, history) => async dispatch => {
//   const res = await axios.post('/api/surveys', values);

//   history.push('/surveys');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const fetchSurveys = () => async dispatch => {
//   const res = await axios.get('/api/surveys');

//   dispatch({ type: FETCH_SURVEYS, payload: res.data });
// };
