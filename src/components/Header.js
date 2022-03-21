import React from "react";
import {Score} from "./Score";

export const Header = (props) => {
    return (
        <div id={'header'}>
            <h1>Memory Card</h1>
            <Score score={props.score} bestScore={props.bestScore}/>
        </div>
    );
};