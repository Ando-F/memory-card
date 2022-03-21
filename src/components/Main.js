import React, {useEffect, useState} from "react";
import '../styles/Main.css';

import {Card} from "./Card";

import dumbledore from '../images/Albus_Dumbledore.jpg';
import umbridge from '../images/Dolores_Umbridge.jpg';
import malfoy from '../images/Draco-Malfoy.jpg';
import harry from '../images/Harry_Potter.jpg';
import hermione from '../images/Hermione-Granger.jpg';
import ron from '../images/Ron_Weasley.jpg';
import snape from '../images/Severus-Snape.jpg';
import sirius from '../images/Sirius_Black.jpg';
import voldemort from '../images/Voldemort.jpg';


export const Main = (props) => {
    const [cards, setCards] = useState({
        array: [
        <Card image={dumbledore} name={'Albus Dumbledore'}/>,
        <Card image={malfoy} name={'Draco Malfoy'}/>,
        <Card image={umbridge} name={'Dolores Umbridge'}/>,
        <Card image={harry} name={'Harry Potter'} />,
        <Card image={hermione} name={'Hermione Granger'} />,
        <Card image={ron} name={'Ron Weasley'} />,
        <Card image={snape} name={'Severus Snape'} />,
        <Card image={sirius} name={'Sirius Black'} />,
        <Card image={voldemort} name={'Voldemort'} />
        ]
    });

    const shuffleArray = () => {
        let arrayAfterShuffle = cards.array;
        for (let i = arrayAfterShuffle.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let k = arrayAfterShuffle[i];
            arrayAfterShuffle[i] = arrayAfterShuffle[j];
            arrayAfterShuffle[j] = k;
        }
        setCards({array: arrayAfterShuffle});
    };

    // useEffect(() => {
    //     const shuffleArray = (e) => {
    //         if (e.target && e.target.nodeName === 'IMG') {
    //             let arrayAfterShuffle = cards.array;
    //             for (let i = arrayAfterShuffle.length -1; i > 0; i--) {
    //                 let j = Math.floor(Math.random() * i);
    //                 let k = arrayAfterShuffle[i];
    //                 arrayAfterShuffle[i] = arrayAfterShuffle[j];
    //                 arrayAfterShuffle[j] = k;
    //             }
    //             setCards({array: arrayAfterShuffle});
    //         }
    //     };
    //
    //     document.getElementById('main').addEventListener('click', shuffleArray);
    //
    //     return () => {
    //         document.getElementById('main').removeEventListener('click', shuffleArray);
    //     }
    // });

    return (
        <div id={'main'}>
            {cards.array.map((Component, i) => <div className={'cardContainer'} onClick={() => {
                props.increaseScore();
                shuffleArray();
            }} key={i}>{Component}</div>)}
        </div>
    )
}