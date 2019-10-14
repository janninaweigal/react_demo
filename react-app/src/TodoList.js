import React, { Component,Fragment } from 'react';
import store from './redux/index'
import {changeInputAction,getList} from './redux/actionCreators.js'
import NoState from './noState.js'
import axios from 'axios'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state=store.getState()
        // 订阅Redux的状态
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <Fragment>
                <input value={this.state.inputValue} onChange={this.changeValue.bind(this)}/>
                <NoState width={123}/>
                {
                    this.state.list.map((item,key)=>{
                        return <h3 key={key}>{item.name}</h3>
                    })
                }
            </Fragment>
        );
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5da1b9597ab42e4fa1407450/example/userList')
        .then((res)=>{
            const data = res.data
            if(data.code===200){
                getList(data.data)
            }
        })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
        
    }
    storeChange(){
        this.setState(store.getState())
    }
    changeValue(e){
        const action = changeInputAction(e.target.value)
        // console.log(e.target.value)
        // const action={
        //     type: CHANGE_INPUT,
        //     value:e.target.value
        // }
        store.dispatch(action)
    }
}
 
export default TodoList;