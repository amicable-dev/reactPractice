import React from 'react';
import { useState } from 'react';

const States = () => {
  const [defaultVal, updateVal] = useState('Apple');
  const [count ,updCount]=useState(0);
  const handleFruit = () => {
    updateVal('Grapes')
  };
  return (
    <div>
      <h1>States In react</h1>
      <p>change fruit here : {defaultVal}</p>
      <button onClick={handleFruit}>FruitChanger</button>
      <h1>Count space </h1>
      <h3>change count: {count}</h3>
      <button onClick={()=>updCount(count +1)}>Count++</button>
      <button onClick={()=>updCount(count-1)}>count--</button>
    </div>
  );
};
export default States;
