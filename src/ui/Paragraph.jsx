import styled, { css } from "styled-components";

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: var(--color-gray-500);

  ${(props) =>
    props.color === "white" &&
    css`
      color: var(--color-primary-100);
    `}

  ${(props) => css`
    text-align: ${props.position};
  `}
`;

export default Paragraph;
