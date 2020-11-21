import styled from 'styled-components';
import { InformationTextTypes } from './InformationText.constants';



interface WrapperProps {
  type: InformationTextTypes;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 2em 1em;

  border: 1px solid ${({ type }) => type === "error" ? `red` : `blue` };
`;