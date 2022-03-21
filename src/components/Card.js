import React from "react";
import '../styles/Card.css';

export const Card = (props) => {
    return (
        <div className={'card'}>
            <img src={props.image} alt=""/>
            <p>{props.name}</p>
        </div>
    );
};