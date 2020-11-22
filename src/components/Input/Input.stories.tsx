import React, { FC, useState } from 'react';

import { storiesOf } from '@storybook/react';

import Input from './Input';
import { expiryDateFormatter } from '../../utils/formatter/expiryDateFormatter';

interface DefaultTextProps {
  error?: string;
  formatter?: (text: string) => string;
}
const DefaultText: FC<DefaultTextProps> = ({ error, formatter }) => {
  const [text, setText] = useState('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  return (
    <Input
      type={'text'}
      value={text}
      onChange={handleInputChange}
      error={error}
      formatter={formatter}
    />
  );
};

storiesOf('Input', module)
  .add('Default', () => {
    return <DefaultText />;
  })

  .add('Error', () => {
    return <DefaultText error="Required" />;
  })
  .add('With Formatter', () => {
    return <DefaultText formatter={expiryDateFormatter} />;
  });
