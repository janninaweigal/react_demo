import {takeEvery,put} from 'redux-saga/effects'
import {GET_SAGA_LIST} from '../redux/actionTypes.js'
import {getSagaList} from '../redux/actionCreators.js'
import axios from 'axios'
//generator函数
function* mySaga(){
    // 等待捕获action
    yield takeEvery(GET_SAGA_LIST,getList)
}
function* getList(){
    // yield console.log('sagaList')
    yield axios.get('https://www.easy-mock.com/mock/5da1b9597ab42e4fa1407450/example/userList')
    .then((res)=>{
        const data = res.data
        if(data.code===200){
            const action = getSagaList(data.data)
            put(action)
        }
    })

    // 第二种
    const res =  axios.get('https://www.easy-mock.com/mock/5da1b9597ab42e4fa1407450/example/userList')
    const action = getSagaList(res.data)
    yield put(action)
}
export default mySaga;