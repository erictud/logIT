import styled, { css } from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 4rem;
  margin: 1rem;
  background-color: var(--color-gray-100);
  transition: all 0.3s ease;

  ${(props) =>
    props.orientation === "row" &&
    css`
      display: grid;
      grid-template-columns: 1fr auto;
    `}

  ${(props) =>
    props.showAnimation === true &&
    css`
      &:hover {
        transform: translateY(-0.5rem);
      }
    `}

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSvg = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.color === "green"
      ? css`
          background-color: var(--color-green-medium);
        `
      : css`
          background-color: var(--color-primary-300);
        `}

  & svg {
    font-size: 2.5rem;
  }
`;

export default function Card({ children, Icon, orientation, iconColor, showAnimation }) {
  return (
    <StyledCard orientation={orientation} animation={showAnimation}>
      <StyledSvg color={iconColor}>{Icon}</StyledSvg>
      <div>{children}</div>
    </StyledCard>
  );
}

Card.defaultProps = {
  orientation: "column",
  animation: true,
};
