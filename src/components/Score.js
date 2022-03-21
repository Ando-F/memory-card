import React from "react";

export const Score = (props) => {
    return (
        <div id={'score'}>
            <h3>Current score: {props.score}</h3>
            <h3>Best score: {props.bestScore}</h3>
        </div>
    );
};