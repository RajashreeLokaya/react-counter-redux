import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CustomisedButton from "../utility/customizedButton";
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
  resetCounter,
} from "../store/reducers";
import "./counter.scss";

const Counter = () => {
  const [amount, setAmount] = useState(0); // add amount from input

  const count = useSelector(selectCount); // update change state value
  const dispatch = useDispatch(); // dispatch item

  const handleDecrement = (val) => {
    dispatch(decrement());
  };
  const handleIncrement = (val) => {
    dispatch(increment());
  };
  const handleAddAmount = (e) => {
    setAmount(e.target.value);
    dispatch(incrementByAmount(e.target.value));
  };
  const handleReset = () => {
    setAmount(0);
    dispatch(resetCounter());
  };
  return (
    <>
      <div>
        <div className="label">Increment/ Decrement</div>
        <CustomisedButton
          value="-"
          className="decrement"
          buttonClicked={handleDecrement}
          forName="decrement"
        />
        <span className="label">{count}</span>
        <CustomisedButton
          value="+"
          className="increment"
          buttonClicked={handleIncrement}
          forName="increment"
        />
      </div>
      <div>
        <div className="label">Add Number</div>
        <input
          type={"text"}
          value={amount}
          onChange={(e) => handleAddAmount(e)}
        />
      </div>
      <div>
        <div className="label">Reset</div>
        <CustomisedButton
          value="Reset"
          className="increment"
          buttonClicked={handleReset}
          forName="reset"
        />
      </div>
    </>
  );
};

export default Counter;
