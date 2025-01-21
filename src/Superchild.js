import React , {useContext} from 'react';
import {GlobalInfo} from './App';


function Superchild(){
    const {appColor} = useContext(GlobalInfo);
    const day="Sunday";

    return (
        <div>
            <h1 style={{color:appColor}}>Super Child</h1>
            <button onclick={()=>getDay(day)}>Click Me</button>
        </div>
    )

}
export default Superchild;