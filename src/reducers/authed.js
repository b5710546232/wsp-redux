import constants from '../constants';
import { CALL_API } from 'redux-api-middleware'
// const initialState = {
//   accessToken:null,
//   user:null,
// }
//
// const authed = (state=initialState,action)=>{
//   switch (action.type) {
//     case 'RECEIVE_ACCESS_TOKEN':
//     return Object.assign({}, state, {
//       accessToken: action.accessToken,
//     })
//
//     case 'RECEIVE_AUTHED_USER':
//     return Object.assign({}, state, {
//       user: action.user,
//     })
//     default : return state
//   }
//
// }
// export default authed

const initialState = {
  username: "",
  isLogin: false
}

const authed = (state=initialState,action)=>{
  switch(action.type) {
    case constants.LOGIN_SUCCESS:
    console.log('action',action.payload.username);
    return Object.assign({}, state, {
         isLogin: true,
         username:action.payload.username
       })
   case constants.LOAD_USER_DATA_SUCCESS:
   console.log(action.payload);
   return Object.assign({}, state, {
        isLogin: true,
        username:action.payload.username
      })
  //  console.log(action.data);
  //  return Object.assign({}, state, {
  //       isLogin: true,
  //       username:action.data.name
  //     })
      // newState.isLogin = true,
      // newState.username = action.data
      // return newState;
    case constants.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
export default authed;
