import React, { Component,Fragment } from 'react';
import { Link } from "react-router-dom";
// import { Link,Redirect } from "react-router-dom";

class RouterTest extends Component {
    constructor(props){
        super(props) // 调用父类的构造函数，固定写法
        this.state = {
        }
    }
    render() { 
        return (  
            <Fragment>
                路由测试参数
                <Link to={'/'}>回到首页</Link>
                {/* <Redirect to="/"/> */}
                <button onClick={this.redictHome.bind(this)}>编程重定向</button>
            </Fragment>
        );
    }
    redictHome(){
        this.props.history.push('/')
    }
    componentDidMount(){
        console.log(this.props.match)
    }
}
export default RouterTest;