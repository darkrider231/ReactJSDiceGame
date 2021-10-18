import React, { useState } from "react";
import Die from "./Die";
import "./RollDice.css";

const RollDice = ({sides}) => {
    const [state, setState] = useState({
        die1: "one",
        die2: "two",
        die3: "three",
        die4: "four",
        die5: "five",
        die6: "six",
        rolling: false,
        totalScore: 4,

    });

    const {die1, die2, die3, die4, die5, die6, rolling, totalScore } = state;

    const roll = () => {
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        const newDie3 = sides[Math.floor(Math.random() * sides.length)];
        const newDie4 = sides[Math.floor(Math.random() * sides.length)];
        const newDie5 = sides[Math.floor(Math.random() * sides.length)];
        const newDie6 = sides[Math.floor(Math.random() * sides.length)];
        const score1 = Object.values(newDie1); // [1]
        const score2 = Object.values(newDie2); // [2]
        const score3 = Object.values(newDie3); //[3]
        const score4 = Object.values(newDie4); //[4]
        const score5 = Object.values(newDie5); //[5]
        const score6 = Object.values(newDie6); //[6]

        setState({
            die1: Object.keys(newDie1), //["one"]
            die2: Object.keys(newDie2), //["two"]
            die3: Object.keys(newDie3), //["three"]
            die4: Object.keys(newDie4), //["four"]
            die5: Object.keys(newDie5), //["five"]
            die6: Object.keys(newDie6), //["six"]
            rolling: true,
            totalScore: score1[0] + score2[0] + score3[0] + score4[0] + score5[0] + score6[0],
        });

        setTimeout(() => {
            setState((prevState) => ({...prevState, rolling: false}))
        }, 1000);
    };

    return (
        <>
            <div className="roll-dice">
                <div className="rolldice-container">
                    <Die face= {String(die1)} />
                    <Die face= {String(die2)} />
                    <Die face= {String(die3)} />
                    <Die face= {String(die4)} />
                    <Die face= {String(die5)} />
                    <Die face= {String(die6)} />
                </div>
                <button onClick={roll} disabled={rolling}>
                    {rolling ? "Rolling..." : "Roll Dice"}
                </button>
                <h2>Total Score: {totalScore}</h2>
            </div>

        </>
    );
};

RollDice.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {six: 6},
    ],
};

export default RollDice;