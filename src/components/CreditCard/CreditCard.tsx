import React, { ChangeEvent, FC } from 'react';
import { creditCardFormatter } from '../../utils/formatter/creditCardFormatter';
import Input from '../Input/Input';

interface CreditCardProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CreditCard: FC<CreditCardProps> = ({ value, onChange, placeholder }) => {
  // 1234 5678 9012 3456

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const modifiedEvent = {
      ...event,
      target: {
        ...event.target,
        value: creditCardFormatter(event.target.value),
      },
    };

    onChange && onChange(modifiedEvent);
  };

  return (
    <Input
      type="text"
      onChange={handleInputChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default CreditCard;
