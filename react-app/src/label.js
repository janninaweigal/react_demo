import React, { Component,Fragment } from 'react'
class LabelForInput extends Component {
    state = {  
        inputValue: '',
        refsValue: ''
    }
    render() { 
        return (
            <Fragment>
                <label htmlFor="inputValue">文本输入框</label>
                <input id="inputValue" value={this.state.inputValue} onChange={this.changeValue.bind(this)}/>
                refs测试
                <input ref={(input)=>{this.input = input}} value={this.state.refsValue} onChange={this.changeInputValue.bind(this)} />
            </Fragment>
        );
    }
    changeInputValue(){
        this.setState({
            refsValue: this.input.value
        })
    }
    changeValue(e){
        this.setState({
            inputValue:e.target.value
        })
    }
}
 
export default LabelForInput;