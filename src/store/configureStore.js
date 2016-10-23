import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { apiMiddleware } from 'redux-api-middleware'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware, apiMiddleware]
  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger())
  }

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
}
