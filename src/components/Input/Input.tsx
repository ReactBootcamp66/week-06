import React, { FC, ChangeEvent } from 'react';
import { InputTypes } from './Input.constants';
import { Wrapper, ErrorMessage, StyledInput } from './Input.styles';

interface InputProps {
  type: InputTypes;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: FC<InputProps> = ({ type, value, onChange, error }) => {
  return (
    <Wrapper>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        hasError={!!error}
      />
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default Input;
