import {CHANGE_INPUT}  from './actionTypes.js'
export const changeInputAction = (value)=>{
    return {
        type:CHANGE_INPUT,
        value
    }
}