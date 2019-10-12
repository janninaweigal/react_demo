import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import './tool.css'
class Tool extends Component {
    constructor(props){
        super(props) // 调用父类的构造函数，固定写法
        this.state = {
            inputValue: '',
            list: [],
            undoValue: '',
            display: 'block',
            toggleName: 'show'
        }
    }
    render() { 
        return (  
            <Fragment>
                {/* 注释代码 */}
                传递的值：{this.props.toolName}
                <button onClick={this.updateMainState.bind(this)}>子组件修改父组件</button>
                <input className="solidBorder" type="text" onChange={this.inputChange.bind(this)} value={this.state.inputValue} placeholder="请输入文字"/>
                <button onClick={this.addText.bind(this)}>添加</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index}>{item}<span onClick={this.deleteItem.bind(this,index)}>删除元素</span></li>
                        })
                    }
                </ul>
                <hr/>
                <h3>dangerouslySetInnerHTML:</h3>
                {/* dangerouslySetInnerHTML 使HTML标签不会变成字符串，渲染在页面上 */}
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li 
                                    key={index+item}
                                    onClick={this.deleteItem.bind(this,index)}
                                    dangerouslySetInnerHTML={{__html:item}}
                                >
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <button onClick={this.toggleAnimation.bind(this)}>显示或者隐藏动画</button>
                <div className={this.state.toggleName} style={{"width":"200px","height":"200px","border":"1px solid red"}}>这是动画</div>
            </Fragment>
        );
    }
    toggleAnimation(){
        this.setState({
            toggleName:this.state.toggleName==='show'?'hide':'show'
        })
    }
    updateMainState(){
        // propTypes 定义了类型，则传递的值类型 需要与之相同
        this.props.updateState(Math.random(100).toString())
    }
    inputChange(e){
        // e.target.value
        this.setState({
            inputValue: e.target.value
        })
    }
    addText(){
        // const list = [...this.state.list]
        // list.push(this.state.inputValue)
        // this.setState({
        //     list:list
        // })
        // 或者
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
// PropTypes.string.isRequired
Tool.propTypes={
    toolName:PropTypes.string,
    updateState:PropTypes.func
}
Tool.defaultProps = {
    toolName: '44444'
}
export default Tool;