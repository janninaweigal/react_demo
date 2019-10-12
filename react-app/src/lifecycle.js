import React, { Component, Fragment } from 'react'
class lifeCycle extends Component {
    state = {  }
    render() {
        console.log('render|开始挂载渲染')
        return (
            <Fragment>
                <hr/>
                <ul>
                    <li>Initialization: 初始化阶段</li>
                    <li>
                        Mounting: 挂载阶段(componentWillMount|组件即将被挂在到页面的时刻执行、render|页面state或props发生变化时执行、componentDidMount|组件挂载完成时被执行)
                        <p>componentWillMount(不推荐使用)和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，</p>
                        <p>render函数是只要有state和props变化就会执行，这个初学者一定要注意。</p>
                    </li>
                    <li>
                        Updation: 更新阶段
                        <p>shouldComponentUpdate、componentWillUpdate、componentDidUpdate</p>
                    </li>
                    <li>Unmounting: 销毁阶段</li>
                </ul>
            </Fragment>
        );
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    // componentWillMount() {
    //     console.log('componentWillMount|组件即将被挂在到页面的时刻执行')
    // }
    componentDidMount() {
        console.log('componentDidMount|组件挂载完成时刻执行')
    }
    // -------------------------------------
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate---组件发生改变前执行')
        // 返回true，就同意组件更新;返回false,就反对组件更新
        // 返回false 不会进行更新
        return true;
    }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate----组件更新前，shouldComponentUpdate函数之后执行')
    // }
    componentDidUpdate(){
        console.log('componentDidUpdate----组件更新之后执行')
    }
}
 
export default lifeCycle;