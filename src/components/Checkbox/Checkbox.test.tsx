import React, { FC, useState } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';

const SimpleCheckbox: FC = () => {
  const [isChecked, setChecked] = useState<boolean>(false);

  return (
    <Checkbox
      checked={isChecked}
      onChange={(event) => setChecked(event.target.checked)}
      label="Test"
    />
  );
};

describe('Checkbox', () => {
  test('renders input tag', () => {
    const { container } = render(<SimpleCheckbox />);

    const checkboxLabel = container.querySelector('label') as HTMLLabelElement;
    expect(checkboxLabel).toBeInTheDocument();
  });

  test('checks checked state', () => {
    const { container } = render(<SimpleCheckbox />);

    const checkboxLabel = container.querySelector('label') as HTMLLabelElement;
    const checkbox = container.querySelector('input') as HTMLInputElement;

    expect(checkbox.checked).toBe(false);

    // event
    userEvent.click(checkboxLabel);

    expect(checkbox.checked).toBe(true);
  });

  test('checks label value', () => {
    const { getByText } = render(<SimpleCheckbox />);

    const checkboxLabel = getByText(/Test/);

    expect(checkboxLabel).toBeInTheDocument();
  });
});
