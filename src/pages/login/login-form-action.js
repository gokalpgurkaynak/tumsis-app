import axios from 'axios'
import jwtDecode from 'jwt-decode'

const baseUrl = 'http://localhost/JwtWebApi'

export const login = (userName, password) => {
  const url = `${baseUrl}/oauth2/token`
  
  var params = new URLSearchParams();
  params.append('username', userName);
  params.append('password', password);
  params.append('grant_type', 'password');

  return new Promise( (resolve, reject) => {
    axios.post(url, params)
        .then(res => {
            const authData = jwtDecode(res.data.access_token)
            resolve({
                token: res.data.access_token,
                userName: authData.unique_name,
                role: authData.role,
                displayName: authData.sub
            })
        })
        .catch(err => {
            reject(err.message)
        })
  })
}
