import constants from '../constants';
import { CALL_API } from 'redux-api-middleware'
const END_POINT = 'http://localhost:8000/api/v1/u/login/'

export const logout = ()=> {
  return {
    type: constants.LOGOUT
  }
}
const receiveUserData = (data)=>{
  return{
    type:constants.RECEIVE_USERDATA,
    data
  }
}

export const login = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: END_POINT,
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
              return res.json().then((token) => {
                console.log(token);
                dispatch(receiveUserData(data))
                return data
              })
            }
          },
          'LOGIN_FAILURE'
        ]
      }
    }
  )
)
