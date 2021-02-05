import React from "react";


type ButtonsPropsType = {
    disabled: boolean
    onClickHandler: () => void
    title: string
}


export function Button  (props:ButtonsPropsType) {
    return(
    <button className="button" disabled ={props.disabled}  onClick={props.onClickHandler}>{props.title} </ button>
     )
}