import {CHANGE_INPUT,GET_LIST} from './actionTypes'
const defaultState = {
    inputValue:'测试111',
    list: []
}
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type===GET_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    return state
}