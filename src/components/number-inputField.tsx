import React, { useState } from 'react';

const inputStyling = {
  cursor: 'initial',
  fontSize: '16px',
  width: '60px',
  alignText: 'center',
};

interface NumberInputProps {
  value?: number;
  onChange?: (value: number) => void;
  title?: string;
}

// eslint-disable-next-line react/function-component-definition
const NumberInput: React.FC<NumberInputProps> = ({
  value = '',
  onChange,
  title,
}) => {
  const [inputValue, setInputValue] = useState<number | string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    // if (!Number.isNaN(parseFloat(newValue)) || newValue === "") {
    if (/^-?\d*\.?\d*$/.test(newValue)) {
      setInputValue(newValue);
      if (onChange) {
        onChange(parseFloat(newValue));
      }
      // }
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      className="inputStyling"
      style={inputStyling}
      title={title}
      data-testid="numberInput"
    />
  );
};

export default NumberInput;
