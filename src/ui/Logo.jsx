import styled from "styled-components";

import { HiOutlinePencil } from "react-icons/hi2";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledSvg = styled.div`
  font-size: 2rem;
  color: var(--color-primary-500);
`;

const StyledHeading = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.35rem;
  color: var(--color-primary-700);

  & span {
    color: var(--color-primary-400);
  }
`;

export default function Logo({ icon }) {
  return (
    <StyledContainer>
      {icon && (
        <StyledSvg>
          <HiOutlinePencil />
        </StyledSvg>
      )}
      <StyledHeading>
        log<span>IT</span>
      </StyledHeading>
    </StyledContainer>
  );
}

Logo.defaultProps = {
  icon: true,
};
