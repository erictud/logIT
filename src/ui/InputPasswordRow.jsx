import styled from "styled-components";

import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { CgDanger } from "react-icons/cg";

const StyledInputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & div div svg {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-600);
  width: 75%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

const StyledLabel = styled.label`
  font-size: 1.3rem;
  text-align: start;
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

export default function InputRow({ label, value, id, onChange, error }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <StyledInputRow>
      <StyledLabel htmlFor={id}>{label || id}</StyledLabel>
      <Container>
        <StyledInput
          type={showPassword ? "text" : "password"}
          id={id}
          value={value}
          onChange={onChange}
        />
        <div onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
        </div>
      </Container>
      {error && (
        <ErrorContainer>
          <CgDanger />
          <Error>{error}</Error>
        </ErrorContainer>
      )}
    </StyledInputRow>
  );
}
