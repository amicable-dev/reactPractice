import React from 'react';
import { useState } from 'react';

const States = () => {
  const [defaultVal, updateVal] = useState('Apple');
  const handleFruit = () => {
    const frtArr = ['apple', 'mango', 'banana'];
    const arrLength = frtArr.length;
    for (let i = 0; i < arrLength; i++) {
      updateVal(frtArr[i]);
    }
  };
  return (
    <div>
      <h1>States In react</h1>
      <p>change fruit here : {defaultVal}</p>
      <button onClick={handleFruit}>FruitChanger</button>
    </div>
  );
};
export default States;
