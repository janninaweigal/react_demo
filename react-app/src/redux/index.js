/**
 * 状态管理 Redux
 */
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer.js'
// 配置Redux Dev Tools
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer,enhancer);// 创建数据存储仓库
export default store;