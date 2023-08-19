import styled, { css } from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${(props) =>
    props.type === "vertical"
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}
`;
