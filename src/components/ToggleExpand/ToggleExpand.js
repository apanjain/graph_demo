import React, { useState } from 'react';
import expand from './src/expand.svg';
import shrink from './src/shrink.svg';
import './ToggleExpand.module.scss';
function ToggleExpand(props){
    const[source,setSource] = useState(document.fullscreenElement!=null ? shrink : expand);
    window.addEventListener('fullscreenchange', function() {
        if(document.fullscreenElement !== null)
            setSource(shrink);
        else
            setSource(expand);
    })
    return(
        <>
            <img src={source} alt="expand" onClick={props.onClick}/>
        </>
    )
}
export default ToggleExpand;