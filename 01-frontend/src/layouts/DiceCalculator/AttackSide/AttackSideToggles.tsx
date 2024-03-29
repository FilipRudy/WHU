import React, {useState} from "react";
import hammerActive from "../../../Images/DiceCalculator/AttackSide/hammerActive.png";
import hammer from "../../../Images/DiceCalculator/AttackSide/hammer.png";
import {useAttackSideTogglesContext} from "./Contexts/AttackSideTogglesContexts";
import "../../../css/DiceCalculator/ToggleIcon.css";
import "../../../css/DiceCalculator/AttackSide.css";

export const AttackHammerToggle = () => {

    const {toggleHammer} = useAttackSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='toggle' >      <img
            src={hammer}
            className={isToggled ? "ToggleIcon mx-auto d-block" : "ToggleIconClicked mx-auto d-block"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleHammer();
            }}
        />
        </div>
    );
};

export const AttackSwordToggle = () => {

    const {toggleSword} = useAttackSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='toggle'>
            <img
            src={hammer}
            className={isToggled ? "ToggleIcon mx-auto d-block" : "ToggleIconClicked mx-auto d-block"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleSword();
            }}
        />
        </div>
    );
};

export const AttackFullSupportToggle = () => {

    const {toggleFullSupport} = useAttackSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='toggle' >      <img
            src={hammer}
            className={isToggled ? "ToggleIcon mx-auto d-block" : "ToggleIconClicked mx-auto d-block"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleFullSupport();
            }}
        />
        </div>
    );
};

export const AttackHalfSupportToggle = () => {

    const {toggleHalfSupport} = useAttackSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='toggle'>      <img
            src={hammer}
            className={isToggled ? "ToggleIcon mx-auto d-block" : "ToggleIconClicked mx-auto d-block"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleHalfSupport();
            }}
        />
        </div>
    );
};
