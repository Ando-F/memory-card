import React, {useState, useEffect} from "react";

import {Header} from "./components/Header";
import {Main} from "./components/Main";

const App = () => {
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    const increaseScore = () => {
        setScore(score + 1);
    }

    const deleteScore = () => {
        setScore(0);
    }

    const updateTotalScore = () => {

    }

    return (
        <div>
            <Header score={score} totalScore={totalScore}/>
            <Main increaseScore={increaseScore} deleteScore={deleteScore}/>
        </div>
    )
}

export default App;
