  import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { apiMiddleware } from 'redux-api-middleware'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunkMiddleware, apiMiddleware]
  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger())
  }
  const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
  ))
  return store
}
