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
import background from '/Users/matveiv/Documents/IT/the_odin_project/memory-card/src/images/iu.jpeg';


export const Main = (props) => {
    const [cards, setCards] = useState({
        array: [
        <Card id={1} image={dumbledore} name={'Albus Dumbledore'}/>,
        <Card id={2} image={malfoy} name={'Draco Malfoy'}/>,
        <Card id={3} image={umbridge} name={'Dolores Umbridge'}/>,
        <Card id={4} image={harry} name={'Harry Potter'} />,
        <Card id={5} image={hermione} name={'Hermione Granger'} />,
        <Card id={6} image={ron} name={'Ron Weasley'} />,
        <Card id={7} image={snape} name={'Severus Snape'} />,
        <Card id={8} image={sirius} name={'Sirius Black'} />,
        <Card id={9} image={voldemort} name={'Voldemort'} />
        ]
    });
    const [arr, setArr] = useState([]);

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

    useEffect(() => {
        document.body.style.backgroundImage = `url('${background}')`;

        const updateArray = (e) => {
            if (e.target.nodeName === 'IMG' || e.target.nodeName === 'P' || e.target.className === 'card') {
                if (!arr.includes(e.target.id)) {
                    setArr((oldArray) => oldArray.concat(e.target.id));
                    props.increaseScore();
                } else {
                    props.updateTotalScore();
                    props.deleteScore();
                    setArr([]);
                }
            }
        }

        document.getElementById('main').addEventListener('click', updateArray);

        return () => {
            document.getElementById('main').removeEventListener('click', updateArray);
        }
    })

    return (
        <div id={'main'}>
            {cards.array.map((Component, i) => <div className={'cardContainer'} onClick={(e) => {
                shuffleArray();
            }} key={i}>{Component}</div>)}
        </div>
    )
}