import React, { Component } from 'react';
import Tool from './Tool.js'
import InputFor from './label.js'
class App extends Component {
    constructor(){
        super()
        this.clickButton=this.clickButton.bind(this)
    }
    state = { 
        flag: true,
        toolName: 'toolName'
    }
    render() { 
        return ( 
            <div>
                {/* setState有回调函数 */}
                <Tool toolName={this.state.toolName} updateState={this.updateState.bind(this)} />
                {this.state.flag?'yes':'no'}
                <button onClick={this.clickButton}>点击</button><br/>
                <InputFor/>
            </div>
        );
    }
    updateState(value){
        this.setState({ toolName: value });
    }
    clickButton(){
        this.setState({ flag:!this.state.flag  });
    }
}
 
export default App;