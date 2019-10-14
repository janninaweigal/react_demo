import React from 'react'
import {changeInputAction} from './redux/actionCreators'
import {connect} from 'react-redux'  //引入连接器

const axiosMock = (props)=>{
    let {inputValue,inputChange} = props
    return (
        <div>
            <input value={inputValue} onChange={inputChange}/>
            <p>这是react-redux 获取的值：{inputValue}</p>
        </div>
    );
}
// 映射关系就是把原来的state映射成组件中的props属性
 const stateToProps = (state)=>{
     return {
        inputValue:state.inputValue
     }
 }
//  改变store中的值
 const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            const action = changeInputAction(e.target.value)
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(axiosMock);