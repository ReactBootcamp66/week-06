import React, { FC } from 'react';
import { InformationTextTypes } from './InformationText.constants';
import { Wrapper } from './InformationText.styles';

interface InformationTextProps {
  type: InformationTextTypes;
}

const InformationText: FC<InformationTextProps> = ({ type, children }) => {
  return (
    <Wrapper type={type} role="alert">
      <p>{children}</p>
    </Wrapper>
  );
};

export default InformationText;
