import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

//导入合并的reducer
import reducer from './reducer'

//开启redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  //应用thunk中间件
  applyMiddleware(thunk)
));

export default store