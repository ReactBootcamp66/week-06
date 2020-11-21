import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';
import { ButtonTypes } from './Button.constants';

describe('Button', () => {
  test('renders default button', () => {
    const { getByRole } = render(<Button text="BUTTON" />);

    const button = getByRole('button') as HTMLButtonElement;

    expect(button.type).toBe('button');
    expect(button.textContent).toBe('BUTTON');
  });

  test('renders submit button', () => {
    const { getByRole } = render(
      <Button text="BUTTON" type={ButtonTypes.Submit} />
    );

    const button = getByRole('button') as HTMLButtonElement;

    expect(button.type).toBe('submit');
  });

  test('triggers onClick', () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<Button text="BUTTON" onClick={mockFn} />);

    const button = getByRole('button') as HTMLButtonElement;
    userEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
