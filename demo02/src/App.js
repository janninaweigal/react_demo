import React, { Component } from 'react';
import store from './redux'
class App extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() { 
        return ( <div>
            <input value={this.state.inputValue}/>
            <button>提交</button>
        </div> );
    }
}
export default App;