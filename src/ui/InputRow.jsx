import styled from "styled-components";

import { CgDanger } from "react-icons/cg";

const StyledInputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-600);
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

const StyledLabel = styled.label`
  font-size: 1.3rem;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  color: var(--color-red-dark);

  & svg {
    font-size: 1.3rem;
    color: var(--color-red-dark);
  }
`;

const Error = styled.p`
  font-size: 1.1rem;
`;

export default function InputRow({ label, type, value, id, onChange, error }) {
  return (
    <StyledInputRow>
      <StyledLabel htmlFor={id}>{id || label}</StyledLabel>
      <StyledInput type={type} id={id} value={value} onChange={onChange} />
      {error && (
        <ErrorContainer>
          <CgDanger />
          <Error>{error}</Error>
        </ErrorContainer>
      )}
    </StyledInputRow>
  );
}
