import { styled } from "styled-components";

const StyledInputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const FileInput = styled.input`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-primary-500);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-primary-700);
    }
  }
`;

const StyledLabel = styled.label`
  font-size: 1.3rem;
`;

export default function FileInputRow({ id, label, accept, onChange, inputRef }) {
  return (
    <StyledInputRow>
      <StyledLabel htmlFor={id}>{label || id}</StyledLabel>
      <FileInput type="file" id={id} accept={accept} onChange={onChange} ref={inputRef} />
    </StyledInputRow>
  );
}
