import {CHANGE_INPUT} from './actionTypes'
const defaultState = {
    inputValue:'测试111'
}
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.inputValue
        return newState
    }
    return state
}