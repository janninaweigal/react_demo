import {CHANGE_INPUT,GET_LIST}  from './actionTypes.js'
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