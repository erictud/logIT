import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
    margin: 0 0.25rem;

    &:hover {
      padding: 0.3rem 0.75rem;
    }
  `,
  medium: css`
    font-size: 1%.5;
    padding: 0.5rem 0.75rem;
    margin: 0 0.25rem;

    &:hover {
      padding: 0.5rem 1rem;
    }
  `,
  big: {},
};

const types = {
  primary: css`
    color: var(--color-primary-50);
    background-color: var(--color-primary-700);
    border-radius: 1rem;
  `,
  secondary: css`
    color: var(--color-gray-0);
    background-color: var(--color-primary-600);
  `,
  underline: css`
    color: var(--color-gray-100);
    border-bottom: 2px solid var(--color-primary-700);
  `,
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;

  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}

  // active
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-primary-500);
    `}
`;

Button.defaultProps = {
  size: "small",
  type: "primary",
  active: false,
};

export default Button;
