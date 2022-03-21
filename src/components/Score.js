import React from "react";

export const Score = (props) => {
    return (
        <div id={'score'}>
            <h3>Current score: {props.score}</h3>
            <h3>Total score: {props.totalScore}</h3>
        </div>
    );
};