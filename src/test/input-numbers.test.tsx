/* eslint-disable import/no-extraneous-dependencies */
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, vi } from 'vitest';

import NumberInput from '../components/number-inputField';

describe('NumberInput', () => {
  it('should update input value on change', () => {
    const handleChange = vi.fn();
    render(<NumberInput value={0} onChange={handleChange} />);
    const inputElement = screen.getByTestId('numberInput');
    fireEvent.change(inputElement, { target: { value: '123' } });
    expect(inputElement).toHaveValue('123');
    expect(handleChange).toHaveBeenCalledWith(123);
  });
});
