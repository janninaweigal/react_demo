import {CHANGE_INPUT,GET_LIST,GET_SAGA_LIST}  from './actionTypes.js'
import axios from 'axios'
export const changeInputAction = (value)=>{
    return {
        type:CHANGE_INPUT,
        value
    }
}
export const getList = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5da1b9597ab42e4fa1407450/example/userList')
        .then((res)=>{
            const data = res.data
            if(data.code===200){
                const action = getList(data.data)
                dispatch(action)
            }
        })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
}

export const getSagaList = (data)=>({
    type:GET_SAGA_LIST,
    data
})