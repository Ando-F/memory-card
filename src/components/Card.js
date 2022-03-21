import React from "react";
import '../styles/Card.css';

export const Card = (props) => {
    return (
        <div className={'card'} id={props.id}>
            <img id={props.id} src={props.image} alt=""/>
            <p id={props.id}>{props.name}</p>
        </div>
    );
};