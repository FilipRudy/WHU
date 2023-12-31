import React from "react";
import "../../css/DiceCalculator/DiceCalculator.css";
import { AttackSide } from "./AttackSide/AttackSide";
import { Results } from "./Results/Results";
import { DefenceSide } from "./DefenceSide/DefenceSide";

export const DiceCalculator = () => {

  return (
    <div className="DiceCalculator rounded-5">
      <div className="column">
        <AttackSide  />
      </div>
      <div className="column">
        <Results />
      </div>
      <div className="column">
        <DefenceSide />
      </div>
    </div>
  );
};
