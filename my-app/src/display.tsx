import React from "react";
import "./App.css";
import {Button} from "./buttons";

type DisplayPropsType = {
    increment: () => void
    reset: () => void
    counter: number
}

export function Display(props: DisplayPropsType) {


    return (
        <div className="wrapper">
            <div className={props.counter === 5 ? "counterRed" : "counter"}>{props.counter}</div>
            <div className="buttons">
                <span>
                    <Button
                    title={"increment"}
                    onClickHandler={props.increment}
                    disabled={props.counter === 5}
                />
                <Button
                    title={"reset"}
                    onClickHandler={props.reset}
                    disabled={props.counter === 0}
                />
                </span>
            </div>
        </div>
    )
}

