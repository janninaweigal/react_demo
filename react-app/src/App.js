import React, { Component } from 'react';
import Tool from './Tool.js'
import InputFor from './label.js'
import LifeCycle from './lifecycle.js'
import DisplayComponent from './disableComponent.js'
import MockAxios from './getAxiosData.js'
import TransitionGroup from './transitionGroup'
class App extends Component {
    constructor(){
        super()
        this.clickButton=this.clickButton.bind(this)
    }
    state = {
        itemValue: '',
        flag: true,
        toolName: 'toolName',
        list:[]
    }
    render() { 
        return ( 
            <div style={{"margin":"20px 10px"}}>
                {/* setState有回调函数 */}
                <Tool toolName={this.state.toolName} updateState={this.updateState.bind(this)} />
                {this.state.flag?'yes':'no'}
                <button onClick={this.clickButton}>点击</button><br/>
                <InputFor/>
                <LifeCycle/>
                <hr/>
                list添加元素
                <br/>
                <input value={this.state.itemValue} onChange={this.bindItemValue.bind(this)}/>
                <br/>
                <button onClick={this.addItemValue.bind(this)}>添加</button>
                {this.state.list.map((item,index)=>{
                    return <DisplayComponent key={index} value={item} deleteComponent={this.deleteComponent.bind(this,index)}/>
                })}
                <hr/>
                <MockAxios/>
                <hr/>
                <TransitionGroup/>
            </div>
        );
    }
    bindItemValue(e){
        this.setState({
            itemValue:e.target.value
        })
    }
    addItemValue(){
        this.setState({
            list:[...this.state.list,this.state.itemValue]
        })
    }
    deleteComponent(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    updateState(value){
        this.setState({ toolName: value });
    }
    clickButton(){
        this.setState({ flag:!this.state.flag  });
    }
}
 
export default App;