import styled from "styled-components";

import { CgDanger } from "react-icons/cg";

const StyledInputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-600);
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  min-height: 40vh;
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

export default function TextareaRow({ value, onChange, id, label, error }) {
  return (
    <StyledInputRow>
      <StyledLabel htmlFor={id}>{label || id}</StyledLabel>
      <StyledTextarea id={id} value={value} onChange={onChange} />
      {error && (
        <ErrorContainer>
          <CgDanger />
          <Error>{error}</Error>
        </ErrorContainer>
      )}
    </StyledInputRow>
  );
}
