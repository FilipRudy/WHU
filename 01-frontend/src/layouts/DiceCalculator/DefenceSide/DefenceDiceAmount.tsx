import React, {useState} from "react";
import "../../../css/DiceCalculator/DiceAmount.css";
import {
    BsFillDiamondFill,
    BsFillDice1Fill,
    BsFillDice2Fill,
    BsFillDice3Fill,
    BsFillDice4Fill,
    BsFillDice5Fill, BsFillDice6Fill
} from "react-icons/bs";
import {useDefenceDiceContext} from "./Contexts/DefenceDiceAmountContext";
import {useAttackRerollDiceContext} from "../AttackSide/Contexts/AttackRerollDiceAmount";
import {useDefenceRerollDiceContext} from "./Contexts/DefenceRerollDiceAmount";

export const DefenceDiceAmount = () => {

    const {defenceDiceAmount, incrementAmount, decreaseAmount} = useDefenceDiceContext();

    const CheckForDiceIcon = () => {
        const icons = [<BsFillDice1Fill key="1" />, <BsFillDice2Fill key="2" />,
            <BsFillDice3Fill key="3" />, <BsFillDice4Fill key="4" />,
            <BsFillDice5Fill key="5" />, <BsFillDice6Fill key="6" />,];

        if(defenceDiceAmount === 0)
        {
            return <BsFillDiamondFill/>;
        }

        return icons[defenceDiceAmount-1];
    };


    return (
        <div className="DiceAmount dice">
            <a>Defence dice amount: </a>
            <button className="btn-sm btn btn-primary" onClick={decreaseAmount}> -1 dice </button>
            <div className='text-align-center'> <h2>{CheckForDiceIcon()}</h2> </div>
            <button className="btn-sm btn btn-primary" onClick={incrementAmount}> + 1 dice</button>
        </div>
    );
};


export const DefenceRerollDiceAmount = () => {

    const {defenceRerollDiceAmount, incrementAmount, decreaseAmount} = useDefenceRerollDiceContext();

    const CheckForDiceIcon = () => {
        const icons = [<BsFillDice1Fill key="1" />, <BsFillDice2Fill key="2" />,
            <BsFillDice3Fill key="3" />, <BsFillDice4Fill key="4" />,
            <BsFillDice5Fill key="5" />, <BsFillDice6Fill key="6" />,];

        if(defenceRerollDiceAmount === 0)
        {
            return <BsFillDiamondFill/>;
        }

        return icons[defenceRerollDiceAmount-1];
    };

    return (
        <div className="DiceAmount dice">
            <a>Defence dice rerolls: </a>
            <button className="btn-sm btn btn-primary" onClick={decreaseAmount}> -1 dice</button>
            <div className='text-align-center'><h2>{CheckForDiceIcon()}</h2></div>
            <button className="btn-sm btn btn-primary" onClick={incrementAmount}> + 1 dice</button>
        </div>
    );
};

