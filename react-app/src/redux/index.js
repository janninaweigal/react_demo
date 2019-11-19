/**
 * 状态管理 Redux
 */
import {createStore,applyMiddleware,compose} from 'redux'
// 官方例子 thunk写法
// import thunk from 'redux-thunk'
import reducer from './reducer.js'
// import {createStore,applyMiddleware} from 'redux'
// const store = createStore(reducer,applyMiddleware(thunk))
// --------------
// 配置Redux Dev Tools
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose
// const enhancer = composeEnhancers(applyMiddleware(thunk))
// const store = createStore(reducer,enhancer);// 创建数据存储仓库

// ------------ sagas写法
import mySagas from '../saga/sagas.js'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducer,enhancer);// 创建数据存储仓库
sagaMiddleware.run(mySagas)
export default store;