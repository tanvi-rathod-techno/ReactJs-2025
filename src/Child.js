import React , {useContext} from 'react';
import {GlobalInfo} from './App';

function Child(){
    const {appColor} = useContext(GlobalInfo);
    console.warn('appcolor',appColor);
    return (
        <div>
            <h1 style={{color:appColor}}>Child component</h1>
        </div>
    )

}
export default Child;