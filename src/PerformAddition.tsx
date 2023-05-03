/* eslint-disable no-alert */
import React, { useState } from 'react';

import NumberInput from './components/number-inputField';

function PerformAddition() {
  const [input1, setInput1] = useState<number>();
  const [input2, setInput2] = useState<number>();
  const [result, setResult] = useState<number>();

  const handleInput1Change = (value: number) => {
    setInput1(value);
  };

  const handleInput2Change = (value: number) => {
    setInput2(value);
  };

  const handleAddition = () => {
    if (input1 !== undefined && input2 !== undefined) {
      if (Number.isNaN(input1) || Number.isNaN(input2)) {
        alert('Both input fields must contain valid numbers');
      } else {
        const addResult = input1 + input2;
        setResult(addResult);
      }
    } else {
      alert('Empty Fields');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      handleAddition();
      // console.log("enter");
    }
  };

  return (
    <form style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <NumberInput
        value={input1}
        onChange={handleInput1Change}
        title="input1"
      />
      <p style={{ fontSize: '20px', fontWeight: '500' }}> + </p>
      <NumberInput
        value={input2}
        onChange={handleInput2Change}
        title="input2"
      />
      <p style={{ fontSize: '20px', fontWeight: '500' }}> = </p>
      <p
        style={{ fontSize: '20px', fontWeight: '500' }}
        className="inputStyling"
        title="result"
      >
        {result}
      </p>
      <button
        onClick={handleAddition}
        style={{ background: '#fff', color: '#000', marginLeft: '40px' }}
        onKeyDown={handleKeyDown}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default PerformAddition;
