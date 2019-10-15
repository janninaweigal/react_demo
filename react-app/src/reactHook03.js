import React, { useReducer } from 'react';

function Example04(){
    const [count,dispatch] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1;
            case 'sub':
                return state-1;
            default:
                return
        }
    },0)
    return (
        <div>
            目前的计数为：{count}
            <button onClick={()=>{dispatch('add')}}>增加</button>
            <button onClick={()=>{dispatch('sub')}}>减少</button>
        </div>
    )
}
export default Example04;