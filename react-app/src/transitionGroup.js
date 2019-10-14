import React, { Component,Fragment } from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import './Tool.js'
class transitionGroup extends Component {
    constructor(){
        super()
        this.toggleCss=this.toggleCss.bind(this)
    }
    state = {
        isShow:true,
        list:[]
    }
    render() { 
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit>
                    <div>It is my world</div>
                </CSSTransition>
                <p>xxx-enter: 进入（入场）前的CSS样式</p>
                <p>xxx-enter-active:进入动画直到完成时之前的CSS样式</p>
                <p>xxx-enter-done:进入完成时的CSS样式</p>
                <p>xxx-exit:退出（出场）前的CSS样式</p>
                <p>xxx-exit-active:退出动画知道完成时之前的的CSS样式</p>
                <p>xxx-exit-done:退出完成时的CSS样式</p>
                <p>加上unmountOnExit,加上这个的意思是在元素退场时，自动把DOM也删除</p>
                <button onClick={this.toggleCss}>召唤Boss</button>
                <hr/>
                <button onClick={this.setListContent.bind(this)}>显示list</button>
                <br/>
                <TransitionGroup>
                    {
                        this.state.list.map((item,key)=>{
                        return (<CSSTransition
                            key={key}
                            appear={true}
                            timeout={2000}
                            classNames="boss-text"
                            unmountOnExit>
                            <div>{item}</div>
                        </CSSTransition>)
                        })
                    }
                </TransitionGroup>
            </Fragment>
        );
    }
    setListContent(){
        this.setState({
            list:[
                "动画一",
                "动画二"
            ]
        })
    }
    toggleCss(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default transitionGroup;