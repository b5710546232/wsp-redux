import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const CART_ENDPOINT = ''
let nextTodoId = 0

export const addItemtoCart = (item) => {
  return {
    type: 'ADDITEM_TO_CART',
    id: nextTodoId++,
    text
  }
}
export const addItemtoCart = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: CART_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+data.token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'ADD_ITEM_TO_CART_REQUEST',
          {
            type: 'ADD_ITEM_TO_CART_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadUserdata(data))
                return data
              })
            }
          },
          'ADD_ITEM_TO_CART_FAILURE'
        ]
      }
    }
  )
)
export const loadCart = (data) => {
  // return {
  //   type: 'SET_VISIBILITY_FILTER',
  //   filter
  // }
}

export const editCart = () => {

}
