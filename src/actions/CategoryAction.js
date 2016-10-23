import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {CATEGORY_ENDPOINT,USER_ENDPOINT,LOGIN_ENDPOINT} from '../constants/endpoints'


export const updateCategory = (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: CATEGORY_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_CATEGORY_REQUEST',
          {
            type: 'UPDATE_CATEGORY_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadCategoryList())
                return data
              })
            }
          },
          'UPDATE_CATEGORY_FAILURE'
        ]
      }
    }
  )
)
export const reactiveCategory = () => {

}

export const deleteCategory = ()=> {
  return {
    type: null
  }
}

export const loadCategoryList = () => (
  {[CALL_API]: {
    endpoint: CATEGORY_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_CATEGORY_LIST_REQUEST', 'LOAD_CATEGORY_LIST_SUCCESS', 'LOAD_CATEGORY_LIST_FAILURE']
  }}
)
export const loadCategory = (id) => (
  {[CALL_API]: {
    endpoint: CATEGORY_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_CATEGORY_REQUEST', 'LOAD_CATEGORY_SUCCESS', 'LOAD_CATEGORY_FAILURE']
  }}
)

export const createCategory = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: CATEGORY_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_CATEGORY_REQUEST',
          {
            type: 'CREATE_CATEGORY_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                // dispatch(loadUserdata(data))
                return data
              })
            }
          },
          'CREATE_CATEGORY_FAILURE'
        ]
      }
    }
  )
)
