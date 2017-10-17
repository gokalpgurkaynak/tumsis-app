import axios from 'axios';
import jwtDecode from 'jwt-decode'
import { updateIntl } from 'react-intl-redux'
import messages from '../locales/messages'
import { flattenMessages } from '../locales/locale-utils'


import { 
  AUTH_ACTION_SET_USER,
  AUTH_ACTION_SET_TOKEN,
  SNACKBAR_OPEN,
  SNACKBAR_CLOSE
} from './types';

//const baseUrl = 'http://localhost/JwtWebApi'
const baseUrl = 'http://localhost:50865'

export const openSnackbar = ({message, type}) => dispatch => {
  dispatch({type:SNACKBAR_OPEN,payload:{message,type}})
}

export const closeSnackbar = () => dispatch => {
  dispatch({type:SNACKBAR_CLOSE})
}

export const logout =() => dispatch => {
  dispatch({type:AUTH_ACTION_SET_TOKEN,payload:{token:undefined}})
  dispatch({type:AUTH_ACTION_SET_USER,payload:{userName:undefined,displayName:undefined,role:undefined,}})
  dispatch({type:SNACKBAR_OPEN,payload:{message:'Logged out successfully!', type: 'info'}})
}

export const login = (userName, password) => dispatch => {
  const url = `${baseUrl}/oauth2/token`
  
  var params = new URLSearchParams();
  params.append('username', userName);
  params.append('password', password);
  params.append('grant_type', 'password');

  axios.post(url, params)
    .then(res => {
      const authData = jwtDecode(res.data.access_token)
      dispatch({ type: AUTH_ACTION_SET_TOKEN, payload: { token: res.data.access_token }})
      dispatch({ type: AUTH_ACTION_SET_USER, payload: { userName: authData.unique_name, displayName: authData.sub, role: authData.role }})
      dispatch({ type: SNACKBAR_OPEN,payload:{message: `${userName} successfully logged in`,type: 'success'}})
    })
    .catch(err => {
      dispatch({type:SNACKBAR_OPEN,payload:{message: `${userName} failed to logged in`,type: 'fail'}})
    })
}


export const loadLocales = (locale) => dispatch => {
  
  const flatMessages = flattenMessages(messages[locale])

  dispatch(updateIntl({ locale, messages: flatMessages}))
}

export const changeLocale = (locale) => dispatch => {
  const flatMessages = flattenMessages(messages[locale])
  dispatch(updateIntl({ locale, messages: flatMessages}))
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
