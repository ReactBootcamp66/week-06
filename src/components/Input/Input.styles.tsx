import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 2em 1em;

  flex-direction: column;
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: right;
`;

interface StyledInputProps {
  hasError: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  border 1px solid ${({ hasError }) => (hasError ? `red` : `gray`)};
`;
