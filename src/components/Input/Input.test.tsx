import React, { FC } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

const SimpleInput: FC = () => {
  return <Input type="text" value="testValue" onChange={() => {}} />;
};

const SimpleInputWithError: FC<{ error: string }> = ({ error }) => {
  return (
    <Input type="text" value="testValue" onChange={() => {}} error={error} />
  );
};

describe('Input', () => {
  test('renders input tag', () => {
    const { getByDisplayValue } = render(<SimpleInput />);

    const input = getByDisplayValue(/testValue/);
    expect(input.tagName).toBe('INPUT');
  });

  test('renders error message when error exists', () => {
    const { getByText } = render(<SimpleInputWithError error="errorMessage" />);

    const errorMessage = getByText(/errorMessage/);
    expect(errorMessage.tagName).toBe('P');
  });
});
