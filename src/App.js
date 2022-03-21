import React, {useState, useEffect} from "react";

import {Header} from "./components/Header";
import {Main} from "./components/Main";

const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const increaseScore = () => {
        setScore(score + 1);
    }

    const deleteScore = () => {
        setScore(0);
    }

    const updateTotalScore = () => {
        if (score > bestScore) {
            setBestScore(score);
        }
    }

    return (
        <div id={'app'}>
            <Header score={score} bestScore={bestScore}/>
            <Main increaseScore={increaseScore} deleteScore={deleteScore} updateTotalScore={updateTotalScore}/>
        </div>
    )
}

export default App;
