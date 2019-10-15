import React,{useState,useEffect} from 'react'
import Example03 from './reactHook03.js'
function Example(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('linbin')
    const [age,setAge] = useState(18)

    // 用useEllfect函数 来替换 生命周期函数
    // 每次渲染都会调用一遍useEffet
    // 不加useEffect第二个参数，每次状态发生改变，都会进行解绑操作
    // useEffect第二个参数,可以传入解绑的参数
    useEffect(()=>{
        console.log('useEffect')
        return ()=>{
            console.log('解绑')
        }
    },[count])
    return (
        <div>
            声明、读取、使用（修改）----> userState
            <p>You click {count} times</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>增加次数</button>
            <hr/>
            <h3>姓名：{name}</h3>----<button onClick={()=>{
                setName(name+'bingo')
            }}>更改姓名</button>
            <h3>年龄：{age}</h3>----<button onClick={()=>{
                setAge(age+1)
            }}>更改年龄</button>
            <hr/>
            <Example03/>
        </div>
    )
}
export default Example;