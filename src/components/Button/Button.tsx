import React, { FC } from 'react';
import { ButtonTypes } from './Button.constants';

interface ButtonProps {
  text: string;
  type?: ButtonTypes;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  type = ButtonTypes.Button,
}) => {
  return (
    <button type={type} onClick={onClick} role="button">
      {text}
    </button>
  );
};

export default Button;
