import React, { FC, useState } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';
import { expiryDateFormatter } from '../../utils/formatter/expiryDateFormatter';

const SimpleInput: FC = () => {
  return <Input type="text" value="testValue" onChange={() => {}} />;
};

const SimpleInputWithError: FC<{ error: string }> = ({ error }) => {
  return (
    <Input type="text" value="testValue" onChange={() => {}} error={error} />
  );
};

const SimpleInputWithFormatter: FC = () => {
  const [text, setText] = useState<string>('');

  return (
    <Input
      type="text"
      value={text}
      onChange={(event) => setText(event.target.value)}
      formatter={expiryDateFormatter}
    />
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

  test('gets formatted value', () => {
    const { container } = render(<SimpleInputWithFormatter />);

    const inputElement = container.querySelector('input') as HTMLInputElement;

    expect(inputElement.value).toBe('');
    userEvent.type(inputElement, '0522');
    expect(inputElement.value).toBe('05/22');
  });
});
