import React , {useContext} from 'react';
import {GlobalInfo} from './App';


function Otherchild(){
    const {appColor} = useContext(GlobalInfo);
    return (
        <div>
            <h1 style={{color:appColor}}>Other Child</h1>
        </div>
    )

}
export default Otherchild;