import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import GenerateRooster from "./rooster";
import "../src/index.css";

const App = () => {
    let [highScore, setHighScore] = useState(0);
    let [score, setScore] = useState(0);

    useEffect(() => {
        let cards = document.querySelectorAll(".card");
        let incrementScore = () => {
            // eslint-disable-next-line
            setScore((score = score + 1));
        };

        let resetScore = () => {
            cards.forEach(function (card) {
                card.className = "card";
            });
            if (score > highScore) {
                setHighScore(score);
            }
            setScore((score = 0));
        };

        cards.forEach(function (card) {
            card.addEventListener("click", () => {
                if (card.classList.contains("selected")) {
                    card.className = "card wrong-card";
                    setTimeout(() => {
                        resetScore();
                    }, 500);
                } else {
                    card.className = "card selected";
                    incrementScore();
                }
            });
        });
    }, []);

    return (
        <div className="game">
            <div id="title">
                <p>League Of Legends Memory Game</p>
                <p id="score">Score: {score} </p>
                <p id="highScore">Highscore: {highScore}</p>
            </div>
            <div className="display">
                <GenerateRooster />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
