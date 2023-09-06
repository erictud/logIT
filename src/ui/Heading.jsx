import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.color === "white" &&
    css`
      color: var(--color-primary-100);
    `}

  ${(props) => css`
    text-align: ${props.position};
  `}

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: 0.5rem;
      text-align: center;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
      letter-spacing: 0.3rem;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: 0.3rem;
      color: var(--color-gray-600);
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.3rem;
      font-weight: 400;
    `}
`;

export default Heading;
