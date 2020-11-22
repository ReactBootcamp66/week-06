import React, { FC, ChangeEvent } from 'react';
import { InputTypes } from './Input.constants';
import { Wrapper, ErrorMessage, StyledInput } from './Input.styles';

interface InputProps {
  type: InputTypes;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  formatter?: (text: string) => string;
}

const Input: FC<InputProps> = ({
  type,
  value,
  onChange,
  error,
  placeholder,
  formatter,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let modifiedEvent = event;

    if (formatter) {
      modifiedEvent = {
        ...event,
        target: {
          ...event.target,
          value: formatter(event.target.value),
        },
      };
    }

    onChange && onChange(modifiedEvent);
  };

  return (
    <Wrapper>
      <StyledInput
        type={type}
        value={value}
        onChange={handleInputChange}
        hasError={!!error}
        placeholder={placeholder}
      />
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default Input;
