import axios from 'axios';
import jwtDecode from 'jwt-decode'
import { 
  MANAGEMENT_ACTION_FOO,
  ORGANISATION_ACTION_SET,
  AUTH_ACTION_SET_ORGANIZATION,
  AUTH_ACTION_SET_USER,
  AUTH_ACTION_SET_TOKEN,
  AUTH_ACTION_LOGIN
} from './types';

const url = 'http://localhost:50865/oauth2/token'

export const login = () => async dispatch => {
  var params = new URLSearchParams();
  params.append('username', 'Murat');
  params.append('password', '123456');
  params.append('grant_type', 'password');
  const res = await axios.post(url, params);
  console.log(res)

  const authData = jwtDecode(res.data.access_token)
  dispatch(
    {
      type: AUTH_ACTION_SET_TOKEN,
      payload: {
        token: res.data.access_token
      }
    }
  )

  dispatch(
    {
      type: AUTH_ACTION_SET_USER, 
      payload: {
        userName: authData.unique_name,
        displayName: authData.sub,
        role: authData.role,
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
