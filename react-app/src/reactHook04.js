import React from 'react'
import Buttons from './buttons.js'
import ShowArea from './ShowArea'
import { Color } from './color';   //引入Color组件
function Hook04(){
    return (
        <div>
            <Color>
                <ShowArea/>
                <Buttons/>
            </Color>
        </div>
    )
}
export default Hook04