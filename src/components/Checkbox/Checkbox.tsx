import React, { ChangeEvent, FC } from 'react';

interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label data-testid="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
  // return (
  //   <label>
  //     <input type="checkbox" role="checkbox" checked={checked} onChange={onChange} />
  //     {label}
  //   </label>
  // );
};

export default Checkbox;
