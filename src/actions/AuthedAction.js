import constants from '../constants';
import { CALL_API } from 'redux-api-middleware'
const LOGIN_ENDPOINT = 'http://localhost:8000/api/v1/u/login/'
const USER_ENDPOINT = 'http://localhost:8000/api/v1/u/user/0/'


export const logout = ()=> {
  return {
    type: constants.LOGOUT
  }
}


export const loadUserdata = (token) => (
  {[CALL_API]: {
    endpoint: USER_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_USER_DATA_REQUEST', 'LOAD_USER_DATA_SUCCESS', 'LOAD_USER_DATA_FAILURE']
  }}
)

export const login = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: LOGIN_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'LOGIN_REQUEST',
          {
            type: 'LOGIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadUserdata(data.token))
                return token
              })
            }
          },
          'LOGIN_FAILURE'
        ]
      }
    }
  )
)
