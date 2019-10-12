import React, { Component } from 'react';
class DisplayComponent extends Component {
    state = {  }
    render() {
        return (
            <p>
                {this.props.value}
                <button onClick={this.deleteComponent.bind(this)}>删除组件</button>
            </p>
        );
    }
    shouldComponentUpdate(nextProps,nextState){
        // 性能优化点
        // 解决了子组件的渲染性能问题
        if(nextProps.value!==this.props.value){
            return true
        }
        return false;
    }
    deleteComponent(){
        this.props.deleteComponent()
    }
    componentWillUnmount(){
        console.log("componentWillUnmount卸载")
    }
}
 
export default DisplayComponent;