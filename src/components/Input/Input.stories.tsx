import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import Input from './Input';

const DefaultText = ({ error }) => {
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
    />
  );
};

storiesOf('Input', module)
  .add('Default', () => {
    return <DefaultText />;
  })

  .add('Error', () => {
    return <DefaultText error="Required" />;
  });
