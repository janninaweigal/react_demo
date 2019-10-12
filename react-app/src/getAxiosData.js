import React, { Component,Fragment } from 'react'
import axios from 'axios'
class axiosMock extends Component {
    state = {
        userList:[]
    }
    render() { 
        return ( 
            <Fragment>
                axios获取数据,显示的数据如下：
                {this.state.userList.map((item,key)=>{
                    return <h3 key={key}>{item.name}</h3>
                })}
            </Fragment>
        );
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5da1b9597ab42e4fa1407450/example/userList')
        .then((res)=>{
            const data = res.data
            if(data.code===200){
                this.setState({
                    userList:data.data
                })
            }
        })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
}
 
export default axiosMock;