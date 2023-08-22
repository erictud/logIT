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
    font-size: 1.2rem;
    padding: 0.5rem 0.75rem;
    margin: 0 0.25rem;

    &:hover {
      padding: 0.5rem 1rem;
    }
  `,
  big: css`
    font-size: 1.4rem;
    padding: 0.5rem 0.75rem;
    margin: 0 0.25rem;

    &:hover {
      padding: 0.5rem 1rem;
    }
  `,
};

const types = {
  primary: css`
    color: var(--color-primary-50);
    background-color: var(--color-primary-700);
    border-radius: 1rem;
  `,
  svg: css`
    color: var(--color-gray-900);
    /* background-color: var(--color-primary-700); */
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
  size: "medium",
  type: "primary",
  active: false,
};

export default Button;
