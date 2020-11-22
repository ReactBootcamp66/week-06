import React, { FC, useState } from 'react';
import { render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import CreditCard from './CreditCard';

const SimpleCreditCard: FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <CreditCard
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      placeholder="Credit Card"
    />
  );
};

describe('CreditCard', () => {
  test('renders credit card input', () => {
    const { container } = render(<SimpleCreditCard />);

    const creditCardInput = container.querySelector(
      'input'
    ) as HTMLInputElement;

    expect(creditCardInput).toBeInTheDocument();
  });

  test('changed formatted value', async () => {
    const { container } = render(<SimpleCreditCard />);

    const creditCardInput = container.querySelector(
      'input'
    ) as HTMLInputElement;

    expect(creditCardInput.value).toBe('');
    userEvent.type(creditCardInput, '1234567890123456');

    expect(creditCardInput.value).toBe('1234 5678 9012 3456');
  });
});
