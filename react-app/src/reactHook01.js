import React,{useState,createContext,useContext} from 'react'
// useContext 让父子组件传值更简单
const countContext = createContext()

function Counter(){
    const count = useContext(countContext)
    return (
        <div>
            {count}
        </div>
    )
}

function Example(){
    const [name,setName] = useState('liqin')
    return (
        <div>
            这是谁---->{name}
            <button onClick={()=>{
                setName(Math.random(100))
            }}>变身</button>
            <countContext.Provider value={name}>
                <Counter/>
            </countContext.Provider>
        </div>
    )
}
export default Example;