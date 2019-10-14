import React, { Component,Fragment } from 'react';
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd';
class AntDesign extends Component {
    constructor(props){
        super(props) // 调用父类的构造函数，固定写法
        this.state = {
            inputValue:'',
            list:[]
        }
    }
    render() { 
        return (  
            <Fragment>
                <Input placeholder="Basic usage" value={this.state.inputValue} onChange={e=>{
                    this.setState({
                        inputValue:e.target.value
                    })
                }}/>
                <Button type="primary" onClick={this.addItem.bind(this)}>添加</Button>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </Fragment>
        );
    }
    addItem(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
}
export default AntDesign;