import React, { Component,Fragment } from 'react';
import store from './redux/index'
import {changeInputAction,getSagaList} from './redux/actionCreators.js'
import NoState from './noState.js'

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
                <NoState width={this.state.inputValue}/>
                {
                    this.state.list.map((item,key)=>{
                        return <h3 key={key}>{item.name}</h3>
                    })
                }
            </Fragment>
        );
    }
    componentDidMount(){
        const action = getSagaList()
        store.dispatch(action)
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