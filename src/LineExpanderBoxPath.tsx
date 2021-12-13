import React from 'react'
import {useStyle} from './hooks'
import withContext from './withContext';

interface LEBPProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function
}

const LineExpanderBoxPath = (props : LEBPProps) => {
    const {w, h, scale, onClick} = props;
    const {lineStyle, boxStyle} = useStyle(w, h, scale)
    return (<React.Fragment>
        <div onClick = {() => {onClick()}} style = {boxStyle()}></div>
        <div style = {lineStyle()}></div>
    </React.Fragment>)
}

export default withContext(LineExpanderBoxPath)